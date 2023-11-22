import type { NextPage } from "next"

import { Layout } from "../components/layout/layout"
import { Banner } from "../components/sections/home/banner"
import { Discover } from "../components/sections/home/discover/discover"
import { BuyOurToken } from "../components/sections/buy-our-token/buy-our-token"

const Home: NextPage = () => {
  return (
    <Layout headerOptions={{ title: "Prospera • Home", description: "Home" }}>
      <Banner />
      <Discover />
      <BuyOurToken />
    </Layout>
  )
}

export default Home
