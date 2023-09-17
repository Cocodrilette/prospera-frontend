import { NextPage } from "next"

import { PayPalProvider } from "../../components/providers/PaypalProvider"
import { Layout } from "../../components/layout/layout"
import { useAccount } from "wagmi"
import { ConnectYourWallet } from "../../components/alerts/connectYouWallet"
import { useEffect, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { LinkButton } from "../../components/common/LinkButton"

const Payment: NextPage = () => {
  const { address, isConnecting, isConnected } = useAccount()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <Layout headerOptions={{ title: "Payment", description: "Payment" }}>
      <div className="p-2 md:p-5">
        <LinkButton className="bg-terciaryGreen" href="/">
          Back to Home
        </LinkButton>
      </div>
      <ConnectButton />
      {!domLoaded ? (
        <div>Loading...</div>
      ) : (
        <>{!isConnected ? <ConnectYourWallet /> : <PayPalProvider />}</>
      )}
    </Layout>
  )
}

export default Payment
