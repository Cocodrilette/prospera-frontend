import { Table } from "flowbite-react"
import { H3 } from "../common/text/h3"
import { Button } from "../common/button"
import { useEffect, useState } from "react"

export function TradeTable({ className }: { className?: string }) {
  const productsCodes = ["CRN20", "SOY15", "WHT20", "STDCORN"]
  const productsNames = ["Corn", "Soy", "Wheat", "Standard Corn"]

  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, i) => {
      const price = Math.floor(Math.random() * 100000) + 100001
      const amountInKg = parseFloat(
        ((price * 100) / Math.floor(Math.random() * 1000)).toFixed(2)
      ) // or any other formula that relates amountInKg to price

      const startDate = new Date()
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 365)) // add a random number of days up to a year
      endDate.setMonth(endDate.getMonth() + 6 + Math.floor(Math.random() * 6)) // add a random number of months between 6 and 11

      return {
        name: productsNames[i % productsNames.length],
        productCode: productsCodes[i % productsCodes.length],
        advance: Math.floor(Math.random() * 10000) + 1000,
        price: price,
        amountInKg: amountInKg,
        score: amountInKg / price,
        startDate: startDate,
        endDate: endDate,
      }
    }).sort((a, b) => b.score - a.score)
  )

  function formatMoney(number: number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  function formatWeigth(number: number) {
    return number.toLocaleString()
  }

  useEffect(() => setMounted(true), [])

  return (
    <section
      className={`rounded-md overflow-y-auto flex flex-col gap-4 max-h-[600px] ${className}`}
    >
      <H3>Active orders</H3>
      <div className="inline-flex items-center justify-between sticky top-0 z-10 bg-white py-2">
        <div>
          <a
            href="#"
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Buy
          </a>

          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Sell
          </a>
        </div>
        <Button>Create Order</Button>
      </div>
      <Table hoverable>
        <Table.Head className="sticky top-14 z-10 bg-white">
          <Table.HeadCell className="bg-gray-100">Name</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Open Date</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Close Date</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Product Code</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Advance</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Price</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Amount (kg)</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {!mounted && (
            <>
              {Array.from({ length: 5 }).map((_, i) => (
                <Table.Row key={i} className="bg-inherit animate-pulse">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </>
          )}
          {mounted && (
            <>
              {data.map((item, i) => (
                <Table.Row key={i} className="bg-inherit">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>{item.startDate.toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{item.endDate.toLocaleDateString()}</Table.Cell>
                  <Table.Cell className="font-bold">
                    {item.productCode}
                  </Table.Cell>
                  <Table.Cell>{formatMoney(item.advance)}</Table.Cell>
                  <Table.Cell className="font-bold">
                    {formatMoney(item.price)}
                  </Table.Cell>
                  <Table.Cell>{formatWeigth(item.amountInKg)}</Table.Cell>
                  <Table.Cell>
                    <button className="px-2 py-1 bg-green-400 text-black font-semibold rounded-lg">
                      Open
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </>
          )}
        </Table.Body>
      </Table>
    </section>
  )
}
