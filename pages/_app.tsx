import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"

import { SWRConfig } from "swr"
import type { AppProps } from "next/app"
import { publicProvider } from "wagmi/providers/public"
import { polygonZkEvm, polygonZkEvmTestnet } from "wagmi/chains"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"

import { constants } from "../config/constants"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    polygonZkEvmTestnet,
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
      <RainbowKitProvider chains={chains}>
        <SWRConfig>
          <Component {...pageProps} />
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
