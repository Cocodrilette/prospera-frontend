import Head from "next/head"
import { AppFooter } from "./footer/footer"
import { Main } from "./main"

type HeaderOptions = {
  title: string
  description: string
}

type LayoutType = {
  children?: React.ReactNode
  header?: React.ReactNode
  headerOptions?: HeaderOptions
}

export function Layout({ children, header, headerOptions }: LayoutType) {
  return (
    <>
      <Head>
        <title>{headerOptions?.title || ""}</title>
        <meta content={headerOptions?.description || ""} name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div>
        {header ? header : <></>}
        <Main>{children}</Main>
        <AppFooter />
      </div>
    </>
  )
}
