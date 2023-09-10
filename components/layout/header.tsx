import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import logo from "../../public/images/logo.png"

export function Header() {
  return (
    <header className="flex justify-between items-center p-2 md:p-5 z-10">
      <Image alt="Prospera logo" src={logo} width={60} height={60} />
      <a className="bg-[#36622b] text-white px-5 py-2 hover:shadow-sm shadow-md rounded-full transition-all cursor-pointer">
        Open App
      </a>
    </header>
  )
}
