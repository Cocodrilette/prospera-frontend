import { Fade } from "react-awesome-reveal"
import { ExternalLink } from "../../common/external-link"
import { ScreenSection } from "../../layout/screen-section"
import Link from "next/link"
import { PriceReference } from "../../common/price-reference"

export function BuyOurToken() {
  return (
    <ScreenSection
      className="bg-gradient-to-tr from-neutral-100 via-sky-50 to-sky-100"
      id="buy-cielo"
    >
      <div className="flex flex-col items-center justify-center max-w-7xl p-5 m-auto h-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-500 text-center mb-10">
          <Fade>
            Compra tus <span className="text-indigo-600">Cielos</span>
          </Fade>
        </h2>
        <div className="flex flex-col gap-5">
          <Fade>
            <p className="text-xl text-gray-600 max-w-xl ">
              Cielo es tu entrada a nuestro protocolo. Con Cielo podras pagar
              comisiones, crear contratos contratos y almacenar valor.
            </p>
          </Fade>
        </div>
        <Fade delay={5}>
          <div className="flex flex-col items-center justify-center gap-10">
            <PriceReference className="mt-10" />{" "}
            <Link
              href="/app/buy-cielo"
              className="text-xl bg-indigo-600 text-white py-2 px-10 font-bold rounded-full"
            >
              Comprar ahora
            </Link>
          </div>
        </Fade>
      </div>
    </ScreenSection>
  )
}
