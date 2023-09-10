import type { NextPage } from "next"

import { Layout } from "../components/layout/layout"
import { Banner } from "../components/sections/home/Banner"
import { Descentralization } from "../components/sections/home/Descentralization"
import { LowerFees } from "../components/sections/home/LowerFees"
import { BlockchainEconomy } from "../components/sections/home/BlockchainEconomy"
import { BuyOurToken } from "../components/sections/home/BuyOurToken"

const Home: NextPage = () => {
  return (
    <Layout headerOptions={{ title: "Home", description: "Home" }}>
      <Banner />
      <Descentralization />
      <LowerFees />
      <BlockchainEconomy />
      <BuyOurToken />
    </Layout>
  )
}

export default Home
