import { useEffect, useState } from "react"

import { AppCard } from "../card"
import { H1 } from "../../common/text/h1"
import { useServer } from "../../hooks/server"
import { User } from "../../../types/user.types"
import { CieloDataButtons } from "./cielo-data-buttons"

export function CieloData({ className }: { className?: string }) {
  const { get } = useServer()

  const [mounted, setMounted] = useState<boolean>(false)
  const [userAddress, setUserAddress] = useState<string | null>(null)
  const [userBalance, setUserBalance] = useState<number | null>(null)

  useEffect(() => {
    let _user: string | null | User = window.localStorage.getItem("user")

    if (_user && _user !== null) {
      _user = JSON.parse(_user) as User
      setUserAddress(_user.address)
    }
  }, [])

  function getBalance() {
    if (userAddress) {
      get(`/blockchain/balance/${userAddress}`).then((res) => {
        if (res && res.data) {
          setUserBalance(res.data.rawBalance)
        }
      })
    }
  }

  useEffect(() => {
    if (userAddress) {
      getBalance()
    }
  }, [userAddress])

  useEffect(() => setMounted(true), [])

  return (
    <AppCard
      className={`${className} flex flex-col items-center justify-between p-5`}
    >
      {mounted && userBalance ? (
        <div className="flex flex-col my-auto">
          <H1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl">
            {userBalance}
          </H1>
          <p className="text-gray-500 text-end">Cielo&apos;s</p>
        </div>
      ) : (
        <>
          <div className="h-12 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 "></div>
        </>
      )}
      <CieloDataButtons isLoading={!mounted} />
    </AppCard>
  )
}
