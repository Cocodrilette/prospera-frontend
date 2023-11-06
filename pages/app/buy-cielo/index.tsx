import { NextPage } from "next"

import { Layout } from "../../../components/layout/layout"
import { useAccount } from "wagmi"
import { ConnectYourWallet } from "../../../components/alerts/connect-your-wallet"
import { useEffect, useState } from "react"
import { LinkButton } from "../../../components/common/link-button"
import { PaymentModule } from "../../../components/common/payment-module"
import LoadingCard from "../../../components/common/loading-card"
import { Header } from "../../../components/layout/header"

const Payment: NextPage = () => {
  const { isConnected } = useAccount()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => setDomLoaded(true), [])

  return (
    <Layout
      headerOptions={{ title: "Payment", description: "Payment" }}
      isProtected={true}
      header={<Header />}
    >
      <div className="flex flex-col justify-center items-center mx-2 md:min-w-[600px]">
        {!domLoaded && <LoadingCard />}
        {domLoaded && (isConnected ? <PaymentModule /> : <ConnectYourWallet />)}
      </div>
    </Layout>
  )
}

export default Payment
