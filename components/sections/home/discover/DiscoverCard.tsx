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
      className={`inline-flex justify-center items-center font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6 xl leading-8 rounded-xl shadow-lg p-5 ${className}`}
    >
      <Fade>
        <div>
          {!mounted && (
            <p>
              <AiOutlineLoading3Quarters className="animate-spin m-auto" />
            </p>
          )}
          {mounted && (
            <>
              <p
                className={`text-base md:text-2xl xl:text-3xl font-bold leading-tight ${
                  !selected && "hidden"
                }`}
              >
                {description}
              </p>
              <div className={`${selected && "hidden"}`}>{children}</div>
            </>
          )}
        </div>
      </Fade>
    </div>
  )
}
