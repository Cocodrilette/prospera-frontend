import { NextPage } from "next"

import { PayPalProvider } from "../../components/providers/paypal-provider"
import { Layout } from "../../components/layout/layout"
import { useAccount } from "wagmi"
import { ConnectYourWallet } from "../../components/alerts/connect-your-wallet"
import { useEffect, useState } from "react"
import { LinkButton } from "../../components/common/link-button"
import { PaymentModule } from "../../components/common/payment-module"
import LoadingCard from "../../components/common/loading-card"

const Payment: NextPage = () => {
  const { isConnected } = useAccount()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <Layout headerOptions={{ title: "Payment", description: "Payment" }}>
      <div className="flex justify-end p-2 md:p-5">
        <LinkButton className="bg-black" href="/">
          Back to Home
        </LinkButton>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!domLoaded ? (
          <LoadingCard />
        ) : (
          <>{!isConnected ? <ConnectYourWallet /> : <PaymentModule />}</>
        )}
      </div>
    </Layout>
  )
}

export default Payment
