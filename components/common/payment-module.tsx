import { useState } from "react"

import { PayPalProvider } from "../providers/paypal-provider"
import { ScreenSection } from "../layout/screen-section"
import { TermsSheetCheckbox } from "./terms-sheet-checkbox"
import { ExternalLink } from "./external-link"
import { constants } from "../../config/constants"

export function PaymentModule() {
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

  return (
    <ScreenSection className="flex flex-col mx-2 my-5 md:my-20 md:max-w-2xl">
      <div className="flex flex-col mb-10">
        <div>
          <p className="text-5xl md:text-6xl font-extrabold text-gray-400">
            You will receive{" "}
            <span className="text-gray-700">
              {getCieloAmountFromPaypalAmount(amount)}
            </span>{" "}
            cielo's
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center w-full mt-5 mx-auto md:mt-10"
        >
          <input
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
            disabled={!conditionsAccepted}
            onClick={() => setShowPaypal(true)}
            className={`border-2 shadow-md border-black bg-black text-white p-3 disabled:opacity-60 ${
              showPaypal && "hidden"
            } shadow-md`}
          >
            Pay with Paypal
          </button>
        </div>
      </div>

      <div className={showPaypal ? "" : "hidden"}>
        <PayPalProvider orderDetails={{ amount: cieloAmount }}></PayPalProvider>
      </div>
    </ScreenSection>
  )
}
