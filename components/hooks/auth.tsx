import { create } from "zustand"
import { executeOrCatch } from "../../utils/unsafe-ops/execute-or-catch"

export interface AuthStore {
  user: any
  setUser: (user: any) => void
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  token: string | null
  setToken: (token: string) => void
  logout: () => void
  getStatus: () => Promise<boolean>
}

const TOKEN_NAME = "token"

import { createContext, useContext, useEffect, useState } from "react"

interface AuthContextProps {
  user: any
  setUser: (user: any) => void
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  token: string | null
  setToken: (token: string) => void
  logout: () => void
  getStatus: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  const logout = () => {
    setIsAuth(false)
    setToken(null)
    setUser(null)
  }

  const getStatus = async () => {
    let accessToken

    if (typeof window === "undefined" || !accessToken) {
      return false
    }

    const result = await executeOrCatch<
      {
        accessToken: string
        user: any
      },
      null
    >(
      async () => {
        return fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/refresh`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY ?? "",
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((res) => res.json())
      },
      (result) => result,
      (error) => console.log(error)
    )

    if (result && result.accessToken && result.user) {
      setToken(result.accessToken)
      setUser(result.user)
      setIsAuth(true)

      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_NAME, result.accessToken)
      }

      return true
    } else {
      setToken(null)
      setUser(null)
      setIsAuth(false)
      return false
    }
  }

  useEffect(() => {
    getStatus()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        token,
        setToken,
        logout,
        getStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
