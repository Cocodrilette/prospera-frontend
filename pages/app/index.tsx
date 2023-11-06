import { NextPage } from "next"
import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { H1 } from "../../components/common/text/h1"

const Login: NextPage = () => {
  return (
    <Layout
      headerOptions={{ title: "Home", description: "Home" }}
      header={<Header />}
    >
      <Container7XL className="min-h-[calc(100vh-35vh)] p-auto">
        <H1>App</H1>
      </Container7XL>
    </Layout>
  )
}

export default Login
