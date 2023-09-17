import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export function DiscoverCard({
  children,
  className,
  description,
}: {
  children: React.ReactNode
  className?: string
  description: string
}) {
  const [selected, setSelected] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={`inline-flex justify-center items-center font-extrabold text-4xl lg:text-5xl xl:text-7xl leading-8 rounded-xl shadow-lg p-5 ${className}`}
    >
      {!mounted && (
        <p>
          <AiOutlineLoading3Quarters className="animate-spin m-auto" />
        </p>
      )}
      {mounted && (
        <>
          <p
            className={`text-base md:text-2xl xl:text-3xl font-bold ${
              !selected && "hidden"
            }`}
          >
            <Fade>{description}</Fade>
          </p>
          <Fade className={`${selected && "hidden"}`}>{children}</Fade>
        </>
      )}
    </div>
  )
}