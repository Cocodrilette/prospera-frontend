import { create } from "zustand"
import { executeOrCatch } from "../utils/unsafe-ops/execute-or-catch"

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

export const useAuthStore = create<AuthStore>((set) => {
  const apiKey = process.env.NEXT_PUBLIC_BACKEND_API_KEY ?? ""
  const serverBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? ""

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  }

  let token: string | null = null

  async function getToken() {
    if (typeof window === "undefined") return null
    if (token === null) token = localStorage.getItem("token")

    const result = await executeOrCatch<
      {
        accessToken: string
        user: any
      },
      null
    >(
      async () => {
        return fetch(`${serverBaseUrl}/auth/refresh`, {
          method: "POST",
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => res.json())
      },
      (result) => result,
      (error) => console.log(error)
    )

    if (result && result.accessToken && result.user) {
      set({ token: result.accessToken, isAuth: true, user: result.user })

      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_NAME, result.accessToken)
      }

      return result
    } else {
      set({ token: null, isAuth: false })
      return null
    }
  }

  // Call getToken initially to set the token and isAuth states
  getToken()

  return {
    // User
    user: undefined,
    setUser: (user: any) => set({ user }),
    // Auth
    isAuth: false,
    setIsAuth: (isAuth: boolean) => set({ isAuth }),
    // Token
    token: "token",
    setToken: (token: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_NAME, token)
        set({ token })
      }
    },
    getStatus: async () => {
      const result = await getToken()

      if (result) {
        set({ token: result.accessToken, isAuth: true, user: result.user })

        if (typeof window !== "undefined") {
          localStorage.setItem(TOKEN_NAME, result.accessToken)
        }
      } else {
        set({ token: null, isAuth: false, user: null })
      }

      return result !== null
    },
    // Logout
    logout: () => {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(TOKEN_NAME)
        set({ isAuth: false, token: null })
      }
    },
  }
})
