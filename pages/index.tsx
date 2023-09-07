import type { NextPage } from "next"

import { Layout } from "../components/layout/layout"

const Home: NextPage = () => {
  return (
    <Layout headerOptions={{ title: "Home", description: "Home" }}></Layout>
  )
}

export default Home
