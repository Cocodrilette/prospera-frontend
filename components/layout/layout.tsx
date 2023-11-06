import Head from "next/head"
import { AppFooter } from "./footer/footer"
import { Main } from "./main"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "../hooks/auth"

type HeaderOptions = {
  title: string
  description: string
}

type LayoutType = {
  isProtected?: boolean
  children?: React.ReactNode
  header?: React.ReactNode
  headerOptions?: HeaderOptions
}

export function Layout({
  isProtected,
  children,
  header,
  headerOptions,
}: LayoutType) {
  const router = useRouter()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isProtected && !isAuth) router.push("/auth/login")
  }, [isAuth])

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
