import Head from "next/head"
import { Header } from "./header"
import { Footer } from "./footer"
import { Main } from "./main"

type HeaderOptions = {
  title: string
  description: string
}

type LayoutType = {
  children?: React.ReactNode
  headerOptions?: HeaderOptions
}

export function Layout({ children, headerOptions }: LayoutType) {
  return (
    <>
      <Head>
        <title>{headerOptions?.title || ""}</title>
        <meta content="" name="" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  )
}
