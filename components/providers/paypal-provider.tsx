// https://developer.paypal.com/integration-builder/
// https://developer.paypal.com/docs/api/orders/v2/#orders_create
// https://developer.paypal.com/docs/api/payment-experience/v1/

import { useEffect, useState } from "react"

import { constants } from "../../config/constants"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useAccount } from "wagmi"
import { MessageCard } from "../alerts/message-card"
import LoadingCard from "../common/loading-card"
import { Fade } from "react-awesome-reveal"

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
  const userAccount = useAccount()

  const [message, setMessage] = useState("")
  const [paypalAuthToken, setPaypalAuthToken] = useState<string | null>(null)
  const [localOrderDetails, setLocalOrderDetails] =
    useState<OrderDetails>(orderDetails)
  const [isLoading, setIsLoading] = useState(false)

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
          console.log({ token: result.access_token })
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

  const handler = async () => {
    try {
      console.log({
        userAddress: userAccount.address,
        tokensAmount: localOrderDetails.amount,
      })

      const response = await fetch(`${constants.server.baseUrl}/orders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${paypalAuthToken}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          userAddress: userAccount.address,
          tokensAmount: localOrderDetails.amount,
        }),
      })

      const orderData = await response.json()

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
                console.log({ data })
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
                    console.log("Capture result", orderData)
                    // (3) Successful transaction -> Show confirmation or thank you message
                    // Or go to another URL:  actions.redirect('thank_you.html');
                    const transaction =
                      orderData.purchase_units[0].payments.captures[0]

                    const response = await fetch(
                      `${constants.server.baseUrl}/orders/complete/${orderData.id}`,
                      { method: "POST" }
                    )

                    console.log({ response })

                    setMessage(
                      `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                    )

                    onPaymentSuccess()
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
                onClick={() => onPaymentSuccess()}
                className="w-full border-2 shadow-md rounded-md bg-red-400 hover:bg-red-500 transition-colors text-white p-3 disabled:opacity-60"
              >
                Cancelar
              </button>
            </Fade>
          </div>
        )}
      </PayPalScriptProvider>
      <MessageCard type={"error"} content={message} />{" "}
    </>
  )
}
