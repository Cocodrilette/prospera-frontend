import { create } from "zustand"

export interface AuthStore {
  user: any
  setUser: (user: any) => void
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  token: string | undefined
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  setUser: (user: any) => set({ user }),
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  token: undefined,
  setToken: (token: string) => set({ token }),
  logout: () => set({ user: undefined, isAuth: false, token: undefined }),
}))
