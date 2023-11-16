import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import { PayPalProvider } from "../providers/paypal-provider"
import { ScreenSection } from "../layout/screen-section"
import { TermsSheetCheckbox } from "./terms-sheet-checkbox"
import { ExternalLink } from "./external-link"
import { constants } from "../../config/constants"
import { useRouter } from "next/router"
import { AppCard } from "../app/card"
import { InternalLink } from "./internal-link"

export function PaymentModule() {
  const router = useRouter()

  const [amount, setAmount] = useState(10)
  const [showPaypal, setShowPaypal] = useState(false)
  const [cieloAmount, setCieloAmount] = useState(amount) // [cielo]
  const [conditionsAccepted, setConditionsAccepted] = useState(false)

  function getCieloAmountFromPaypalAmount(paypalAmount: number) {
    const cieloPrice = 1 // usd
    return paypalAmount * cieloPrice
  }

  function handleAmountChange(e: any) {
    let newAmount = parseInt(e.target.value)
    setAmount(newAmount < 0 ? 0 : newAmount)
    const newCieloAmount = getCieloAmountFromPaypalAmount(newAmount)
    setCieloAmount(newCieloAmount < 0 ? 0 : newCieloAmount)
  }

  function onPaymentSuccess() {
    setShowPaypal(false)
    setConditionsAccepted(false)

    toast.success("Payment successful ✅", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    })

    setTimeout(() => {
      router.push("/app")
    }, 3000)
  }

  useEffect(() => {
    if (!conditionsAccepted) setShowPaypal(false)
  }, [conditionsAccepted])

  return (
    <ScreenSection className="flex flex-col mx-2 md:max-w-2xl">
      <div className="flex flex-col">
        <AppCard className="mb-5 bg-yellow-100">
          <p>
            This service is currently unavailable. We still building our app.{" "}
            <span className="font-semibold">
              We will let you know when our platform is ready for real use.
            </span>
          </p>
          <p className="mt-2">
            Take a look to our{" "}
            <InternalLink href="/app ">app demo</InternalLink>
          </p>
        </AppCard>
        <div>
          <p className="text-5xl md:text-6xl font-extrabold text-gray-400">
            You will receive{" "}
            <span className="text-gray-700">
              {getCieloAmountFromPaypalAmount(amount)}
            </span>{" "}
            cielo&apos;s
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center w-full mt-5 mx-auto md:mt-10"
        >
          <input
            disabled={true}
            className="text-center w-full p-2 border-2 bg-gray-50 shadow-md rounded-lg focus:outline-none focus:border-gray-600 text-3xl font-bold"
            placeholder="10"
            type="number"
            onChange={(e) => handleAmountChange(e)}
            value={amount}
          ></input>
        </form>
        <TermsSheetCheckbox
          checked={conditionsAccepted}
          onChange={() => setConditionsAccepted(!conditionsAccepted)}
          className="mt-5"
        >
          <p>
            By using our app, you agree to our{" "}
            <ExternalLink href={constants.legal.termsOfServiceUrl}>
              terms and conditions
            </ExternalLink>
            .
          </p>
        </TermsSheetCheckbox>
        <div className="flex flex-col mt-5 gap-2">
          <button
            disabled={true}
            onClick={() => setShowPaypal(true)}
            className={`border-2 shadow-md rounded-md border-black bg-black text-white p-3 disabled:opacity-60 ${
              showPaypal && "hidden"
            } shadow-md`}
          >
            Pay with Paypal
          </button>
        </div>
      </div>

      <div className={showPaypal ? "" : "hidden"}>
        <PayPalProvider
          forceReRender={showPaypal}
          orderDetails={{ amount: cieloAmount }}
          onPaymentSuccess={onPaymentSuccess}
        />
      </div>
      <ToastContainer />
    </ScreenSection>
  )
}
