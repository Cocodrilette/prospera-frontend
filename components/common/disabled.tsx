import Image from "next/legacy/image"
import { StrongText } from "./text/strong-text"
import teamWorkingImg from "../../public/images/team-working.svg"

export function Disabled() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 pt-5 m-5 md:m-auto md:max-w-md lg:max-w-lg">
      <StrongText>
        Esta funcionalidad esta desabilitada o estamos trabajando en ella.{" "}
        <span className="text-[#6c63ff]">Puedes volver más tarde.</span>
      </StrongText>
      <Image src={teamWorkingImg} alt="Team working" />
    </div>
  )
}
