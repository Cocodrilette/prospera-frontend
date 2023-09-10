import Image from "next/image"
import bcProtocol from "../../../public/images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg"
import { TypeAnimation } from "react-type-animation"

export function Descentralization() {
  return (
    <section
      id="descentralization-section"
      className="flex flex-col md:flex-row gap-10 md:gap-20 p-2 md:px-5 py-20 lg:px-20"
    >
      <div className="flex flex-col justify-center lg:w-1/2">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
          Secure descentralized, and{" "}
          <span className="text-[#729d39]">censorship-resistant</span> futures
          market
        </h2>
        <p className="mt-5 md:text-xl text-gray-500 max-w-3xl">
          Prospera is a decentralized futures market that allows farmers to{" "}
          <span className="font-bold">hedge against price volatility</span> and
          provides investors with a{" "}
          <span className="font-bold">
            secure and easy-to-use financial instrument
          </span>
          . Keeping businesses secure through a robust{" "}
          <span className="font-bold">blokchain-based</span> protocol.
        </p>
      </div>
      <Image
        className="lg:w-1/2 shadow-lg"
        alt="Blockchain protocol"
        src={bcProtocol}
        width={undefined}
        height={undefined}
      />
    </section>
  )
}
