// https://developer.paypal.com/integration-builder/
// https://developer.paypal.com/docs/api/orders/v2/#orders_create
// https://developer.paypal.com/docs/api/payment-experience/v1/

import { useEffect, useState } from "react"

import { constants } from "../../config/constants"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useAccount } from "wagmi"

function Message({ content }: any) {
  return <p>{content}</p>
}

export function PayPalProvider() {
  const userAccount = useAccount()

  const initialOptions = {
    clientId: constants.providers.paypal.clientId,
    "enable-funding": "paypal",
    "data-sdk-integration-source": "integrationbuilder_ac",
  }

  const [message, setMessage] = useState("")
  const [paypalAuthToken, setPaypalAuthToken] = useState<string | null>(null)
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

  return (
    <div className="max-w-md m-auto">
      <PayPalScriptProvider options={initialOptions}>
        {isLoading ? (
          <Message content="Loading..." />
        ) : (
          <PayPalButtons
            style={{
              shape: "rect",
              //color:'blue' change the default color of the buttons
              layout: "vertical", //default value. Can be changed to horizontal
            }}
            createOrder={async () => {
              try {
                const response = await fetch(
                  `${constants.server.baseUrl}/orders`,
                  {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${paypalAuthToken}`,
                      "Content-Type": "application/json",
                      Prefer: "return=representation",
                    },
                    body: JSON.stringify({
                      userAddress: userAccount.address,
                      tokensAmount: 20,
                    }),
                  }
                )

                const orderData = await response.json()

                console.log({ orderData })

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
            }}
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
                }
              } catch (error) {
                console.error(error)
                setMessage(
                  `Sorry, your transaction could not be processed...${error}`
                )
              }
            }}
          />
        )}
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  )
}
