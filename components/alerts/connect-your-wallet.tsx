import { ConnectButton } from "@rainbow-me/rainbowkit"
import { StrongText } from "../common/text/strong-text"

interface ConnectYourWalletProps {
  children?: React.ReactNode
}

export function ConnectYourWallet(
  { children }: ConnectYourWalletProps = {
    children: null,
  }
) {
  return (
    <div className="flex flex-col m-2 md:m-auto py-10 px-5 md:py-20 md:px-10 shadow-xl rounded-xl bg-gray-950 text-white md:max-w-md lg:max-w-lg gap-5 md:gap-10">
      <StrongText>Connect your wallet to continue</StrongText>
      <p className="text-gray-500 md:text-2xl my-2">
        If you don&lsquo;t have a wallet, you can create one{" "}
        <a
          className="text-indigo-600"
          href="https://metamask.io/download.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . If you already have one, make sure your wallet is connected
      </p>
      {children}
      <ConnectButton />
    </div>
  )
}
