import { NextPage } from "next"

import { Layout } from "../../../components/layout/layout"
import { PaymentModule } from "../../../components/common/payment-module"
import { Header } from "../../../components/layout/header"

const Payment: NextPage = () => {
  return (
    <Layout
      headerOptions={{ title: "Payment", description: "Payment" }}
      header={<Header />}
    >
      <div className="flex flex-col justify-center items-center mx-2 md:min-w-[600px]">
        <PaymentModule />
      </div>
    </Layout>
  )
}

export default Payment
