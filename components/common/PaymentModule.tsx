import { useState } from "react"
import { PayPalProvider } from "../providers/paypal-provider"
import { PriceReference } from "./price-reference"
import { StrongText } from "./strong-text"

export function PaymentModule() {
  const [amount, setAmount] = useState(0)

  return (
    <section className="m-2 md:m-auto">
      <div className="mb-10">
        <h1>
          <StrongText>The gate to Prospera</StrongText>
        </h1>
        <PriceReference />
      </div>
      <PayPalProvider orderDetails={{ amount }}></PayPalProvider>
    </section>
  )
}
