import { NextPage } from "next"

import { PayPalProvider } from "../../components/providers/PaypalProvider"
import { Layout } from "../../components/layout/layout"
import { useAccount } from "wagmi"
import { ConnectYourWallet } from "../../components/alerts/connectYouWallet"

const Payment: NextPage = () => {
  const userAccount = useAccount()

  return (
    <Layout headerOptions={{ title: "Payment", description: "Payment" }}>
      {userAccount.address ? <PayPalProvider /> : <ConnectYourWallet />}
    </Layout>
  )
}

export default Payment
