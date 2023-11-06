import Image from "next/image"
import { Montserrat } from "next/font/google"
import { Fade } from "react-awesome-reveal"

import { BiggerTitle } from "../../common/text/bigger-title"
import { Text } from "../../common/text"
import fieldBg from "../../../public/images/field-bg.jpg"
import { useEffect, useRef } from "react"
import { LinkButton } from "../../common/link-button"
import { ScreenSection } from "../../layout/screen-section"

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
    <ScreenSection>
      {/*  */}
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
      {/* This give opacity to the image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black opacity-70 w-full"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-black opacity-60 w-full "></div>
      </div>
      {/*  */}
      <div className="flex flex-col justify-center items-stretch md:items-center py-56 md:py-64 gap-5 md:gap-10">
        {/* Main text */}
        <div>
          <Fade direction="down" duration={500}>
            <BiggerTitle className={`text-white ${montserrat.className}`}>
              Prospera
            </BiggerTitle>
          </Fade>
          <Fade duration={700}>
            <Text className="text-white">
              The first descentralized agricultural futures market
            </Text>
          </Fade>
        </div>
        {/* Get started button */}
        <div className="flex flex-col gap-2">
          <Fade direction="up" duration={500}>
            <LinkButton
              href="#discover"
              className="text-sm md:text-md"
              onClick={() => {
                descentralizationSection.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                })
              }}
            >
              Discover
            </LinkButton>
          </Fade>
          <Fade direction="up" duration={500}>
            <LinkButton
              href="#buy-cielo"
              className="text-sm md:text-md"
              onClick={() => {
                descentralizationSection.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                })
              }}
            >
              Buy Cielo
            </LinkButton>
          </Fade>
        </div>
        {/*  */}
      </div>
    </ScreenSection>
  )
}
