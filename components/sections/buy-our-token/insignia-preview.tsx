import Image, { StaticImageData } from "next/legacy/image"
import { Fade } from "react-awesome-reveal"

interface InisigniaPreviewProps {
  image: StaticImageData
  alt: string
  changeHidden: () => void
  hidden?: boolean
  title?: string
  description?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  buttonColor?: string
  buttonText?: string
  buttonLink?: string
}

export function InsigniaPreview({
  image,
  alt,
  hidden,
  changeHidden,
}: InisigniaPreviewProps) {
  return (
    <div className={`${!hidden ? "hidden" : ""} flex flex-col gap-5 shadow-lg`}>
      <Fade>
        <div className="bg-gray-900 pt-5 px-5 pb-5 rounded-xl gap-5 flex flex-col">
          <Image src={image} alt={alt} />
          <p className="text-gray-300 text-center text-4xl md:text-5xl font-mono">
            EARLY ADOPTER
          </p>
        </div>
      </Fade>

      <button
        onClick={() => changeHidden()}
        className={` border-2 border-black p-3 mb-20 shadow-md`}
      >
        Close preview
      </button>
    </div>
  )
}
