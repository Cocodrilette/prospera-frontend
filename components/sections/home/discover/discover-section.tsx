import { SlArrowDown } from "react-icons/sl"
import { ScreenSection } from "../../../layout/screen-section"

export function DiscoverCard({
  children,
  className,
  description,
  id,
  pointsTo,
}: {
  children: React.ReactNode
  className?: string
  description: string
  id?: string
  pointsTo?: string
}) {
  return (
    <ScreenSection
      id={id}
      className={`m-auto max-w-4xl flex flex-col justify-center items-center gap-10 md:gap-20 font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl rounded-xl px-5  ${className}`}
    >
      <div className="flex flex-col gap-5 md:gap-10 text-center m-auto">
        <div className={``}>{children}</div>
        <p
          className={`text-base md:text-xl xl:text-2xl font-normal leading-tight my-5`}
        >
          {description}
        </p>
        <a
          href={`#${pointsTo}`}
          className="flex items-center justify-center p-5 hover:bg-gray-900 text-gray-500 hover:text-white transition-all w-full"
        >
          <SlArrowDown />
        </a>
      </div>
    </ScreenSection>
  )
}
