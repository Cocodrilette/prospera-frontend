// https://developer.paypal.com/integration-builder/
// https://developer.paypal.com/docs/api/orders/v2/#orders_create
// https://developer.paypal.com/docs/api/payment-experience/v1/

import { useEffect, useState } from "react"

import { constants } from "../../config/constants"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { MessageCard } from "../alerts/message-card"
import LoadingCard from "../common/loading-card"
import { Fade } from "react-awesome-reveal"
import { useServer } from "../hooks/server"
import { User } from "../../types/user.types"
import { useStorage } from "../hooks/storage"

interface OrderDetails {
  amount: number
}

interface PayPalProviderProps {
  orderDetails: OrderDetails
  onPaymentSuccess: () => void
  forceReRender?: any
}

export function PayPalProvider({
  orderDetails,
  onPaymentSuccess,
  forceReRender,
}: PayPalProviderProps) {
  const { post } = useServer()
  const localStorage = useStorage()

  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"error" | "success">("error")
  const [paypalAuthToken, setPaypalAuthToken] = useState<string | null>(null)
  const [localOrderDetails, setLocalOrderDetails] =
    useState<OrderDetails>(orderDetails)
  const [isLoading, setIsLoading] = useState(false)
  const [userAddress, setUserAddress] = useState<string | null>(null)

  async function queryPayPalAuthToken() {
    if (!paypalAuthToken) {
      var body = new URLSearchParams()
      body.append("grant_type", "client_credentials")

      const headers = new Headers()
      headers.append("Content-Type", "application/x-www-form-urlencoded")
      headers.append(
        "Authorization",
        `Basic ${btoa(
          `${constants.providers.paypal.clientId}:${constants.providers.paypal.clientSecret}`
        )}`
      )

      const options = {
        method: "POST",
        headers,
        body,
      }

      setIsLoading(true)
      fetch(constants.providers.paypal.authUrl, options)
        .then((response) => response.json())
        .then((result) => {
          setPaypalAuthToken(result.access_token)
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          console.log("error", error)
        })
    }
  }

  useEffect(() => {
    queryPayPalAuthToken()
  }, [])

  useEffect(() => {
    setLocalOrderDetails(orderDetails)
  }, [orderDetails])

  useEffect(() => {
    let _user: string | null | User = window.localStorage.getItem("user")

    console.log({ _user })

    if (_user && _user !== null) {
      _user = JSON.parse(_user) as User
      setUserAddress(_user.address)
    }
  }, [])

  const handler = async () => {
    try {
      const body = {
        userAddress: userAddress,
        tokensAmount: localOrderDetails.amount,
      }

      console.log(localStorage.get("accessToken"))

      const response = await post("/orders", body, {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        Authorization: `Bearer ${localStorage.get("accessToken")}`,
      })

      const orderData = response?.data

      if (orderData.orderID) {
        return orderData.orderID
      } else {
        const errorDetail = orderData?.details?.[0]
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData)

        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error(error)
      setMessage(`Could not initiate PayPal Checkout...${error}`)
    }
  }

  return (
    <>
      <PayPalScriptProvider options={constants.providers.paypal.initialOptions}>
        {isLoading ? (
          <LoadingCard />
        ) : (
          <div className="flex flex-col">
            <PayPalButtons
              forceReRender={[forceReRender]}
              style={{
                shape: "rect",
                //color:'blue' change the default color of the buttons
                layout: "vertical", //default value. Can be changed to horizontal
              }}
              createOrder={handler}
              onApprove={async (data, actions) => {
                try {
                  const response = await fetch(
                    `https://api-m.sandbox.paypal.com/v2/checkout/orders/${data.orderID}/capture`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${paypalAuthToken}`,
                      },
                    }
                  )

                  const orderData = await response.json()
                  // Three cases to handle:
                  //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                  //   (2) Other non-recoverable errors -> Show a failure message
                  //   (3) Successful transaction -> Show confirmation or thank you message

                  const errorDetail = orderData?.details?.[0]

                  if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                    // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                    return actions.restart()
                  } else if (errorDetail) {
                    // (2) Other non-recoverable errors -> Show a failure message
                    throw new Error(
                      `${errorDetail.description} (${orderData.debug_id})`
                    )
                  } else {
                    // (3) Successful transaction -> Show confirmation or thank you message
                    // Or go to another URL:  actions.redirect('thank_you.html');
                    const transaction =
                      orderData.purchase_units[0].payments.captures[0]

                    const response = await post(
                      `/orders/complete/${orderData.id}`,
                      { method: "POST" }
                    )

                    if (response?.error) {
                      console.error(response?.error)
                      setMessage(
                        `Sorry, your transaction could not be processed. See console for all available details`
                      )
                      actions.restart()
                    } else {
                      setMessage(
                        `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                      )
                      onPaymentSuccess()
                    }
                  }
                } catch (error) {
                  console.error(error)
                  setMessage(
                    `Sorry, your transaction could not be processed...${error}`
                  )
                }
              }}
            />
            <Fade delay={1000}>
              <button
                onClick={() => {
                  setMessage("")
                  onPaymentSuccess()
                }}
                className="w-full rounded-sm bg-red-500 transition-colors text-white p-3 font-semibold md:text-xl disabled:opacity-60"
              >
                Cancelar
              </button>
            </Fade>
          </div>
        )}
      </PayPalScriptProvider>
      <MessageCard type={messageType} content={message} />
    </>
  )
}
