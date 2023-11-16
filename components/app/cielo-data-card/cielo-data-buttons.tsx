import Link from "next/link"
import {
  BsArrowDownRightSquare,
  BsArrowUpRightSquare,
  BsSend,
} from "react-icons/bs"

export function CieloDataButtons({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading ? (
        <div className="flex gap-2 animate-pulse">
          <div className="h-10 bg-green-200 rounded w-20"></div>
          <div className="h-10 bg-red-200 rounded w-20"></div>
          <div className="h-10 bg-blue-200 rounded w-20"></div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            href="/app/buy-cielo"
            type="button"
            className="text-black bg-green-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
          >
            <BsArrowDownRightSquare className="font-bold" />
            Compra
          </Link>
          <button
            type="button"
            className="text-black bg-red-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
          >
            <BsArrowUpRightSquare className="font-bold" />
            Vender
          </button>
          <button
            type="button"
            className="text-black bg-blue-200 shadow-sm rounded-md py-2 px-5 flex items-center justify-center gap-2"
          >
            <BsSend className="font-bold" />
            Envia
          </button>
        </div>
      )}
    </>
  )
}
