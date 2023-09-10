import Image from "next/image"
import { Montserrat } from "next/font/google"
import { Fade } from "react-awesome-reveal"

import { BiggerTitle } from "../../common/BiggerTitle"
import { Text } from "../../common/Text"
import fieldBg from "../../../public/images/field-bg.jpg"
import { BsArrowRightShort } from "react-icons/bs"
import { useEffect, useRef } from "react"

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin-ext"],
})

export function Banner() {
  const descentralizationSection = useRef<HTMLElement | null>(null)

  useEffect(() => {
    descentralizationSection.current = document.getElementById(
      "descentralization-section"
    )
  }, [])

  return (
    <section className="relative p-2 md:px-5 lg:px-20 pb-10 ">
      <Image
        className="absolute w-full h-screen"
        src={fieldBg}
        width={undefined}
        height={undefined}
        quality={100}
        fill={true}
        objectFit="cover"
        alt="A field in a sunset"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black opacity-60 w-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black opacity-50 w-full "></div>
      </div>
      <div className="flex flex-col py-56 md:py-64 gap-2 md:gap-5 justify-center items-start">
        <Fade direction="left" duration={500}>
          <BiggerTitle className={`text-white ${montserrat.className}`}>
            Prospera
          </BiggerTitle>
        </Fade>
        <Fade direction="up" duration={500}>
          <Text className="text-white">
            The first descentralized agricultural futures market
          </Text>
        </Fade>
        <a
          onClick={() => {
            descentralizationSection.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }}
          href="#descentralization-section"
          className="mt-10 z-10 bg-[#729d39] px-5 py-2 rounded-full text-white items-center justify-center flex gap-3 font-semibold"
        >
          Get started <BsArrowRightShort className="font-bold text-xl m-auto" />
        </a>
      </div>
    </section>
  )
}
