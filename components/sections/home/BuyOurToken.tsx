export function BuyOurToken() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-tr from-slate-800 to-black rounded-md shadow-lg m-2 md:m-5 px-2 py-20 md:p-20">
      <div className=" max-w-7xl p-5 ">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 text-center mb-10">
          Buy <span className="text-indigo-600">Cielo</span>
        </h2>
        <div className="flex flex-col gap-5">
          <p className="text-xl text-gray-400 max-w-3xl ">
            <span className="font-bold">Cielo</span> is the native token of the
            Prospera ecosystem. It is a ERC-20 token build on top of the Polygon
            ZK blockchain. Providing the best of both worlds, the security of
            Ethereum and the speed of Polygon.
          </p>
          <p className="text-xl text-gray-400 max-w-3xl ">
            <span className="font-bold">
              The token is the one and only way to interact with the protocol.{" "}
            </span>
            It is used to pay for the fees and future contracts. It is also used
            to provide liquidity to the protocol.
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
    </section>
  )
}
