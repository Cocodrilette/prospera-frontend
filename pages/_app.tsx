import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"

import { SWRConfig } from "swr"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import { publicProvider } from "wagmi/providers/public"
import { polygonZkEvm, polygonZkEvmTestnet, hardhat } from "wagmi/chains"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import "react-toastify/dist/ReactToastify.css"

import { constants } from "../config/constants"
import { ClerkProvider } from "@clerk/nextjs"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    hardhat,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [polygonZkEvmTestnet]
      : [polygonZkEvm]),
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: constants.providers.walletConnect.appName,
  projectId: constants.providers.walletConnect.projectId,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ClerkProvider>
        <RainbowKitProvider chains={chains}>
          <SWRConfig>
            <Component {...pageProps} />
            <Analytics />
          </SWRConfig>
        </RainbowKitProvider>
      </ClerkProvider>
    </WagmiConfig>
  )
}

export default MyApp
