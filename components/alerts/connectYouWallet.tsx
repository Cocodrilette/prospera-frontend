import { StrongText } from "../common/StrongText"

export function ConnectYourWallet() {
  return (
    <div className="flex flex-col m-5 md:m-auto py-20 px-10 shadow-xl rounded-xl bg-yellow-50 md:max-w-md lg:max-w-lg gap-5 md:gap-10">
      <StrongText>Connect your wallet to continue</StrongText>
      <p className="text-gray-500 md:text-xl">
        If you don&lsquo;t have a wallet, you can create one{" "}
        <a
          className="text-indigo-600"
          href="https://metamask.io/download.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  )
}
