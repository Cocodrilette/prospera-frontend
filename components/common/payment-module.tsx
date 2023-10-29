import { useState } from "react"

import { PayPalProvider } from "../providers/paypal-provider"

export function PaymentModule() {
  const [amount, setAmount] = useState(10)
  const [showPaypal, setShowPaypal] = useState(false)
  const [cieloAmount, setCieloAmount] = useState(amount) // [cielo]

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
    <section className="flex flex-col m-2 md:max-w-lg">
      <div className="flex flex-col mb-10">
        <div>
          <p className="text-5xl font-extrabold text-gray-400">
            You will receive{" "}
            <span className="text-gray-700">
              {getCieloAmountFromPaypalAmount(amount)}
            </span>{" "}
            cielo{" "}
            {amount > 1 ? (
              <>
                + our early access{" "}
                <span className="text-gray-500"> IA generated NFT.</span>
              </>
            ) : (
              <></>
            )}
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
        <div className="flex flex-col mt-5 gap-2">
          <button
            onClick={() => setShowPaypal(true)}
            className={`border-2 border-black bg-black text-white p-3 ${
              showPaypal && "hidden"
            } shadow-md`}
          >
            Pay with Paypal
          </button>
          <button
            onClick={() => {}}
            className={` border-2 border-black p-3 ${
              showPaypal && "hidden"
            } shadow-md`}
          >
            Preview NFT
          </button>
        </div>
      </div>

      <div className={showPaypal ? "" : "hidden"}>
        <PayPalProvider orderDetails={{ amount: cieloAmount }}></PayPalProvider>
      </div>
    </section>
  )
}
