declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      NEXT_PUBLIC_PAYPAL_AUTH_URL: string
      NEXT_PUBLIC_PAYPAL_CLIENT_SECRET: string
      NEXT_PUBLIC_PAYPAL_CLIENT_ID: string
      NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string
      NEXT_PUBLIC_WALLETCONNECT_APP_NAME: string
    }
  }
}

export {}
