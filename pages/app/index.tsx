import { NextPage } from "next"
import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { H1 } from "../../components/common/text/h1"
import { useRouter } from "next/router"
import { useAuth } from "../../components/hooks/auth"

const App: NextPage = () => {
  const { user } = useAuth()

  console.log({ user })

  return (
    <Layout
      headerOptions={{ title: "Home", description: "Home" }}
      header={<Header />}
      isProtected={true}
    >
      <Container7XL className="min-h-[calc(100vh-35vh)] p-auto">
        <H1>App</H1>
      </Container7XL>
    </Layout>
  )
}

export default App
