import { Underlined } from "../../../common/Underlined"
import { ScreenSection } from "../../../layout/ScreenSection"
import { DiscoverCard } from "./DiscoverCard"

export function Discover() {
  const blockchainBasedDescription =
    "We believe in the power of blockchain to create a new economy that where farmers and investors can interact in a secure and transparent way. We are designing our protocol-specific token to be used as a medium of exchange and store of value for the Prospera ecosystem."
  const descentralizationDescription =
    "Prospera is a decentralized futures market that allows farmers to hedge against price volatility and provides investors with a secure and easy-to-use financial instrument . Keeping businesses secure through a robust blokchain-based protocol."
  const lowerFeesDescription =
    "As we reduce the number of intermediaries, we reduce the fees and increase the profits for both farmers and investors. With trades that are executed in a matter of seconds, you can be sure that you will never miss a good opportunity"
  const empoweringFarmersDescription =
    "We're committed to harnessing the potential of cutting-edge technology to empower farmers, create innovative solutions, drive investor success, and make a lasting global impact. Our vision is to revolutionize the way farming and investment intersect, ensuring a secure and prosperous future for all."

  return (
    <ScreenSection id="discover">
      <div className="grid gap-2 lg:gap-5 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 h-full w-full">
        <DiscoverCard
          className="bg-primaryGreen"
          description={blockchainBasedDescription}
        >
          <p>
            <Underlined> Blockchain based</Underlined> economy to interact with
            ease and security
          </p>
        </DiscoverCard>
        <DiscoverCard
          className="bg-minimalPink"
          description={descentralizationDescription}
        >
          <p>
            Secure <Underlined>descentralized</Underlined>, and{" "}
            <Underlined>censorship-resistant</Underlined> futures market
          </p>
        </DiscoverCard>
        <DiscoverCard
          className="bg-oceanGreen"
          description={lowerFeesDescription}
        >
          <p>
            The <Underlined>lower fees</Underlined> out there and{" "}
            <Underlined>lightning-fast</Underlined> trades
          </p>
        </DiscoverCard>
        <DiscoverCard
          className="bg-primaryGreen"
          description={empoweringFarmersDescription}
        >
          <p>
            <Underlined>Empowering Farmers</Underlined>,{" "}
            <Underlined>boosting investors</Underlined> and changing the world
          </p>
        </DiscoverCard>
      </div>
    </ScreenSection>
  )
}
