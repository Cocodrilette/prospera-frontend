import { ConnectButton } from "@rainbow-me/rainbowkit"
import type { NextPage } from "next"
import Head from "next/head"
import { Header } from "../components/layout/header"
import { Layout } from "../components/layout/layout"

const Home: NextPage = () => {
  return (
    <Layout headerOptions={{ title: "Home", description: "Home" }}></Layout>
  )
}

export default Home
