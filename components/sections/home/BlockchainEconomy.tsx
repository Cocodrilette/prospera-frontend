import Image from "next/image"
import bcProtocol from "../../../public/images/blockchain-banking.png"

export function BlockchainEconomy() {
  return (
    <section
      id="descentralization-section"
      className="flex flex-col md:flex-row gap-10 md:gap-20 p-2 md:px-5 py-20 lg:px-20"
    >
      <div className="flex flex-col justify-center lg:w-1/2">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
          A <span className="text-[#729d39]">blockchain-based</span> economy to
          interact with ease
        </h2>
        <p className="mt-5 md:text-xl text-gray-500 max-w-3xl">
          We believe in the power of blockchain to create a new economy that
          where farmers and investors can interact in a secure and transparent
          way. We are designing our protocol-specific token to be used as a
          medium of exchange and store of value for the Prospera ecosystem.
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
