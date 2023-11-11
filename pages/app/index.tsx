import { NextPage } from "next"
import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { H1 } from "../../components/common/text/h1"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"
import { useServer } from "../../components/hooks/server"

const App: NextPage = () => {
  const { user } = useUser()
  const { post } = useServer()

  useEffect(() => {
    if (user?.id) {
      const userData = {
        address: user?.web3Wallets[0]?.web3Wallet,
        name: user?.fullName,
        clerkId: user?.id,
        email: user?.emailAddresses[0]?.emailAddress,
      }

      post(`/auth/user`, userData)
    }
  }, [user])

  return (
    <Layout
      headerOptions={{ title: "Cielo | App", description: "Cielo App" }}
      header={<Header />}
    >
      <Container7XL className="min-h-[calc(100vh-35vh)] p-auto">
        <H1>App</H1>
      </Container7XL>
    </Layout>
  )
}

export default App
