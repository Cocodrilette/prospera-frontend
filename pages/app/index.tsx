import { NextPage } from "next"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { useServer } from "../../components/hooks/server"
import { useStorage } from "../../components/hooks/storage"
import { TradeTable } from "../../components/app/trade-table"
import { AppBanner } from "../../components/app/banner"
import { CieloData } from "../../components/app/cielo-data-card/cielo-data"
import { NotificationCard } from "../../components/app/notifications-card"

const App: NextPage = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  const { set } = useStorage()
  const { post } = useServer()
  const [isMounted, setIsMounted] = useState(false)

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

  useEffect(() => setIsMounted(true), [])

  return (
    <Layout
      headerOptions={{ title: "Cielo | App", description: "Cielo App" }}
      header={<Header />}
    >
      <Container7XL className="grid grid-cols-1 md:grid-cols-2 grid-rows-[12] gap-4 min-h-screen w-full">
        <CieloData className="row-span-2 bg-slate-50" />
        <NotificationCard className="row-span-2 " />
        <AppBanner className="row-span-1 md:col-span-2" show={true}>
          ⚠️ The data of the table isn&apos;t real.{" "}
          <span className="font-semibold">
            The data above instead, is real blockchain data.
          </span>{" "}
          We will let you know when our platform is ready for real use.
        </AppBanner>
        <TradeTable className="row-span-6 md:col-span-2" />
      </Container7XL>
    </Layout>
  )
}

export default App
