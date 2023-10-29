import Image from "next/image"
import { StrongText } from "./strong-text"
import teamWorkingImg from "../../public/images/team-working.svg"

export function Disabled() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 pt-5 m-5 md:m-auto md:max-w-md lg:max-w-lg">
      <StrongText>
        This feature is currently disabled or we are working on it.{" "}
        <span className="text-[#6c63ff]">Check it back later.</span>
      </StrongText>
      <Image src={teamWorkingImg} alt="Team working" />
    </div>
  )
}
