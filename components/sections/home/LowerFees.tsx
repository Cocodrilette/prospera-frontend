import Image from "next/image"
import bcProtocol from "../../../public/images/rc-xyz-nft-gallery-UqILKDhWiFw-unsplash.jpg"

export function LowerFees() {
  return (
    <section
      id="descentralization-section"
      className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 p-2 md:px-5 lg:px-20 py-10"
    >
      <Image
        className="lg:w-1/2 shadow-lg"
        alt="Blockchain protocol"
        src={bcProtocol}
        width={undefined}
        height={undefined}
      />
      <div className="flex flex-col justify-center lg:w-1/2">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
          The <span className="text-[#729d39]">lower fees</span> out there and
          lightning-fast trades
        </h2>
        <p className="mt-5 md:text-xl text-gray-500 max-w-3xl">
          As we reduce the number of intermediaries, we reduce the fees and
          increase the profits for both farmers and investors. With trades that
          are executed in a <span className="font-bold">matter of seconds</span>
          , you can be sure that you will{" "}
          <span className="font-bold">never miss a good opportunity</span>.
        </p>
      </div>
    </section>
  )
}
