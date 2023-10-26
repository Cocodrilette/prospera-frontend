import { Underlined } from "../../../common/Underlined"
import { ScreenSection } from "../../../layout/ScreenSection"
import { DiscoverCard } from "./DiscoverCard"

export function Discover() {
  const blockchainBasedDescription =
    "We're harnessing blockchain's potential to forge a secure, transparent economy where farmers and investors seamlessly connect. Our protocol-specific token serves as both currency and value store in the Prospera ecosystem."
  const descentralizationDescription =
    "Decentralized futures market for farmers to hedge against price volatility and offer secure financial instruments to investors via our robust blockchain protocol."
  const lowerFeesDescription =
    "By cutting intermediaries, we lower fees and boost profits for farmers and investors. Lightning-fast trades ensure you seize every opportunity."
  const empoweringFarmersDescription =
    "Committed to leveraging technology for farmer empowerment, innovation, investor success, and global impact. Revolutionizing the intersection of farming and investment for a secure, prosperous future."

  return (
    <ScreenSection id="discover" className="min-h-screen">
      <div className="grid gap-2 lg:gap-5 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 h-full w-full ">
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
