import { LinkButton } from "../common/LinkButton"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin-ext"],
})

export function Header() {
  return (
    <header className="bg-primaryYellow shadow-md flex justify-between items-center p-2 md:p-5 z-10 sticky top-0">
      <p
        className={`text-xl md:text-3xl text-terciaryGreen ${montserrat.className}`}
      >
        Prospera
      </p>
      <LinkButton href="/">Open App</LinkButton>
    </header>
  )
}
