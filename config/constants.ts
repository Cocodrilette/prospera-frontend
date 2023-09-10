export const constants = {
  server: {
    baseUrl: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
  },
  providers: {
    paypal: {
      authUrl: process.env.NEXT_PUBLIC_PAYPAL_AUTH_URL,
      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET,
      initialOptions: {
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        "enable-funding": "paypal",
        "data-sdk-integration-source": "integrationbuilder_ac",
      },
    },
    walletConnect: {
      appName: process.env.NEXT_PUBLIC_WALLETCONNECT_APP_NAME,
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    },
  },
}
