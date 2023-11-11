import { NextPage } from "next"
import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { H1 } from "../../components/common/text/h1"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"
import { useServer } from "../../components/hooks/server"
import { useStorage } from "../../components/hooks/storage"

const App: NextPage = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  const { set } = useStorage()
  const { post } = useServer()

  async function sendUserData(userData: any) {
    const res = await post(`/auth/user`, userData)

    if (res?.data?.accessToken) {
      set("accessToken", res?.data?.accessToken)
      set("user", res?.data?.user)
    }
  }

  useEffect(() => {
    if (user?.id) {
      const userData = {
        address: user?.web3Wallets[0]?.web3Wallet,
        name: user?.fullName,
        clerkId: user?.id,
        email: user?.emailAddresses[0]?.emailAddress,
      }

      sendUserData(userData)
    }
  }, [user, isLoaded, isSignedIn])

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
