import { ExternalLink } from "../../common/ExternalLink"
import { ScreenSection } from "../../layout/ScreenSection"

export function BuyOurToken() {
  return (
    <ScreenSection className="bg-black" id="buy-cielo">
      <div className="flex flex-col items-center justify-center max-w-7xl p-5 m-auto h-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 text-center mb-10">
          Buy your <span className="text-indigo-600">Cielo&lsquo;s</span>
        </h2>
        <div className="flex flex-col gap-5">
          <p className="text-xl text-gray-400 max-w-3xl ">
            Cielo is the Prospera&lsquo;s native{" "}
            <ExternalLink href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/">
              ERC-20 token
            </ExternalLink>{" "}
            on{" "}
            <ExternalLink href="https://polygon.technology/home">
              Polygon ZK
            </ExternalLink>
            , blending Ethereum&lsquo;s security with Polygon&lsquo;s speed.
            It&lsquo;s your gateway to our protocol, serving for fees,
            contracts, and liquidity.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <h3 className="text-3xl text-gray-300 max-w-3xl text-center mt-10">
            1 Cielo = 1 USD
          </h3>{" "}
          <a className="text-xl bg-indigo-600 text-white py-2 px-10 font-bold rounded-full">
            Buy now
          </a>
        </div>
      </div>
    </ScreenSection>
  )
}
