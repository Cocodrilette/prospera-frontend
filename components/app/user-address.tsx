import { useState } from "react"
import { shortAddress } from "../../utils/address"
import { BiCopy, BiLinkExternal } from "react-icons/bi"

export function UserAddress({ address }: { address: string }) {
  const [clicked, setClicked] = useState<boolean>(false)

  const copyAddress = () => {
    setClicked(true)
    navigator.clipboard.writeText(address)
    setTimeout(() => setClicked(false), 500)
  }

  return (
    <div
      className={`inline-flex items-center pl-2 gap-2 border-2 rounded-md ${
        clicked ? "border-green-300" : ""
      } transition-colors`}
    >
      <p
        className={`font-medium ${
          clicked ? "text-gray-700" : "text-gray-500"
        } transition-colors`}
      >
        {shortAddress(address)}
      </p>
      <div className="flex">
        <button
          className={`border-l-2 p-2 ${
            clicked ? "border-green-300" : ""
          } transition-colors`}
          onClick={copyAddress}
        >
          <BiCopy
            className={`${clicked ? "text-green-300" : ""} transition-colors`}
          />
        </button>
        <a
          href={`https://testnet-zkevm.polygonscan.com/address/${address}`}
          rel="noreferrer"
          target="_blank"
          className="border-l-2 p-2"
        >
          <BiLinkExternal
            className={`${clicked ? "text-green-300" : ""} transition-colors`}
          />
        </a>
      </div>
    </div>
  )
}
