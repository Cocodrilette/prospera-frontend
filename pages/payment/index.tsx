import { NextPage } from "next"

import { PayPalProvider } from "../../components/providers/PaypalProvider"
import { Layout } from "../../components/layout/layout"
import { useAccount } from "wagmi"
import { ConnectYourWallet } from "../../components/alerts/connectYouWallet"
import { useEffect, useState } from "react"

const Payment: NextPage = () => {
  const { address, isConnecting, isConnected } = useAccount()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  })

  return (
    <Layout headerOptions={{ title: "Payment", description: "Payment" }}>
      {!domLoaded ? (
        <div>Loading...</div>
      ) : (
        <>{!isConnected ? <ConnectYourWallet /> : <PayPalProvider />}</>
      )}
    </Layout>
  )
}

export default Payment
