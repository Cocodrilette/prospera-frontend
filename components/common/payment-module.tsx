import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import { PayPalProvider } from "../providers/paypal-provider"
import { ScreenSection } from "../layout/screen-section"
import { TermsSheetCheckbox } from "./terms-sheet-checkbox"
import { ExternalLink } from "./external-link"
import { constants } from "../../config/constants"
import { InternalLink } from "./internal-link"
import { useRouter } from "next/router"
import { PriceReference } from "./price-reference"

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
        <PriceReference className="my-5" />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center w-full mt-5 mx-auto md:mt-10"
        >
          <input
            disabled={showPaypal}
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
            Al continuar, aceptas nuestros{" "}
            <ExternalLink href={constants.legal.termsOfServiceUrl}>
              terminos y condiciones de uso
            </ExternalLink>
            .
          </p>
        </TermsSheetCheckbox>
        <div className="flex flex-col mt-5 gap-2">
          <button
            disabled={!conditionsAccepted}
            onClick={() => setShowPaypal(!showPaypal)}
            className={`border-2 shadow-md rounded-md border-black bg-black text-white p-3 disabled:opacity-60 ${
              showPaypal && "hidden"
            } shadow-md`}
          >
            Pay with Paypal
          </button>
        </div>
      </div>

      <div className={showPaypal ? "" : "hidden"}>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8 mb-5">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Articulo
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Cantidad
                </th>
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Cielo
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  {cieloAmount}
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                  ${amount} USD
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className="flex justify-end mt-4">
              <div className="w-1/3">
                <div className="flex justify-between font-bold border-b pb-2">
                  <p>Total</p>
                  <p>${cieloAmount} USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PayPalProvider
          forceReRender={showPaypal}
          orderDetails={{ amount: cieloAmount }}
          onPaymentSuccess={onPaymentSuccess}
        />
      </div>
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-5">
        <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
          Podras cambiar tus <span className="font-semibold">Cielos</span> en
          cualquier momento.{" "}
          <InternalLink href="/app/profile">
            Revisa tu balance para saber más.
          </InternalLink>
        </p>
      </div>
      <ToastContainer />
    </ScreenSection>
  )
}
