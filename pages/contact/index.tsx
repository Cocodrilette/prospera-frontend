import { NextPage } from "next"
import { Disabled } from "../../components/common/disabled"
import { Container7XL } from "../../components/common/container-7xl"
import { Header } from "../../components/layout/header"
import { Layout } from "../../components/layout/layout"

const Contact: NextPage = () => {
  return (
    <Layout
      headerOptions={{ title: "Prospera • Contact", description: "Contact" }}
      header={<Header />}
    >
      <Container7XL className="mb-20">
        <Disabled />
      </Container7XL>
    </Layout>
  )
}

export default Contact
