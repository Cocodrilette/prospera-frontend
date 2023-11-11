import Link from "next/link"
import { H1 } from "../common/text/h1"
import { AppCard } from "./card"
import {
  BsArrowDownRightSquare,
  BsArrowUpRightSquare,
  BsSend,
} from "react-icons/bs"

export function CieloData({ className }: { className?: string }) {
  return (
    <AppCard
      className={`${className} flex flex-col items-center justify-between p-5`}
    >
      <div className="flex flex-col my-auto">
        <H1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl">
          563,876.33
        </H1>
        <p className="text-gray-500 text-end">Cielo&apos;s</p>
      </div>
      <div className="flex gap-2">
        <Link
          href="/app/buy-cielo"
          type="button"
          className="text-black bg-green-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
        >
          <BsArrowDownRightSquare className="font-bold" />
          Buy
        </Link>
        <button
          type="button"
          className="text-black bg-red-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
        >
          <BsArrowUpRightSquare className="font-bold" />
          Sell
        </button>
        <button
          type="button"
          className="text-black bg-blue-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
        >
          <BsSend className="font-bold" />
          Send
        </button>
      </div>
    </AppCard>
  )
}
