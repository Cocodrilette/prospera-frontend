import Image from "next/image"
import logo from "../../public/favicon.ico"
import { useEffect, useState } from "react"
import { Container7XL } from "../common/container-7xl"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { AiOutlineLoading } from "react-icons/ai"
import { useRouter } from "next/router"

export function Header() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <Container7XL>
      <header>
        <nav className="border-gray-200 bg-gray-50 shadow-md rounded-md p-2">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} className="h-8 w-8" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Prospera
              </span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full ${open ? "" : "hidden"}`}
              id="navbar-hamburger"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/app/dashboard"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/app/profile"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/app/buy-cielo"
                    className="block py-2 pl-3 pr-4 text-white bg-gray-900 hover:bg-black rounded"
                  >
                    Buy Cielo
                  </Link>
                </li>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                  {mounted ? (
                    <ConnectButton />
                  ) : (
                    <span className="flex justify-between items-center">
                      <AiOutlineLoading className="animate-spin" />
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Container7XL>
  )
}
