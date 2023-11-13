import { NextPage } from "next"
import { Badge } from "flowbite-react"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { LineChart, Line, Tooltip } from "recharts"

import { Layout } from "../../components/layout/layout"
import { Header } from "../../components/layout/header"
import { Container7XL } from "../../components/common/container-7xl"
import { useServer } from "../../components/hooks/server"
import { useStorage } from "../../components/hooks/storage"
import { TradeTable } from "../../components/app/trade-table"
import { AppBanner } from "../../components/app/banner"
import { CieloData } from "../../components/app/cielo-data"
import { AppCard } from "../../components/app/card"
import LoadingChart from "../../components/common/loading-chart"
import { H3 } from "../../components/common/text/h3"

const App: NextPage = () => {
  const data = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)

    return {
      day: date.getDate(),
      price: Math.floor(Math.random() * 1000) + 100,
    }
  })

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
        <AppBanner className="row-span-1 md:col-span-2" show={true}>
          ⚠️ This is not real data. This is just a demo.{" "}
          <span className="font-semibold">
            We will let you know when our platform is ready for real use.
          </span>
        </AppBanner>
        <CieloData className="row-span-2 bg-slate-50" />
        <AppCard
          className={`row-span-2 bg-gradient-to-tl from-gray-700 to-gray-900`}
        >
          <div className="flex flex-col gap-2">
            <div className="inline-flex justify-between items-center">
              <H3 className="text-white">Notifications</H3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white">- Empty -</p>
            </div>
          </div>
        </AppCard>
        <TradeTable className="row-span-6 md:col-span-2" />
      </Container7XL>
    </Layout>
  )
}

export default App
