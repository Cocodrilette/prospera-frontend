import Link from "next/link"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { ScreenSection } from "../../layout/screen-section"
import { PriceReference } from "../../common/price-reference"
import cyberpunkCityImg from "../../../public/images/bc-protocol.png"

export function BuyOurToken() {
  return (
    <ScreenSection
      className="bg-gradient-to-tr from-neutral-100 via-sky-50 to-sky-100 max-h-screen"
      id="buy-cielo"
    >
      <div className="flex flex-col items-center justify-center max-w-7xl p-5 m-auto h-full">
        <div className="">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-500 text-center mb-10">
            <Fade>
              Compra tus <span className="text-indigo-600">Cielos</span>
            </Fade>
          </h2>
          <div className="flex flex-col gap-5">
            <Fade>
              <p className="text-xl text-gray-600 max-w-xl ">
                Cielo es tu entrada a nuestro protocolo. Con Cielo podras pagar
                comisiones, crear contratos y almacenar valor.
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
        <div className="animate-levitate bounc">
          <Image
            src={cyberpunkCityImg}
            alt="CyberPunk like city"
            height={400}
            width={undefined}
          />
        </div>
      </div>
    </ScreenSection>
  )
}
