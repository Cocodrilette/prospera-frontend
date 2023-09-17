import type { NextPage } from "next"

import { Layout } from "../components/layout/layout"
import { Banner } from "../components/sections/home/Banner"
import { Discover } from "../components/sections/home/discover/Discover"
import { BuyOurToken } from "../components/sections/home/BuyOurToken"

const Home: NextPage = () => {
  return (
    <Layout headerOptions={{ title: "Home", description: "Home" }}>
      <Banner />
      <Discover />
      <BuyOurToken />
    </Layout>
  )
}

export default Home
