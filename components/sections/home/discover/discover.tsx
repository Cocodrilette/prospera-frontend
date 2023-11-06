import { Underlined } from "../../../common/text/underlined"
import { ScreenSection } from "../../../layout/screen-section"
import { DiscoverCard } from "./discover-section"

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
    <div id="discover" className="bg-gray-950">
      <div className="flex flex-col text-white">
        <DiscoverCard
          id="blockchain-based"
          description={blockchainBasedDescription}
          pointsTo="decentralized"
        >
          <p>
            <Underlined className="text-indigo-600">
              {" "}
              Blockchain based
            </Underlined>{" "}
            economy to interact with ease and security
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="decentralized"
          description={descentralizationDescription}
          pointsTo="lower-fees"
        >
          <p>
            Secure{" "}
            <Underlined className="text-minimalPink">descentralized</Underlined>
            , and{" "}
            <Underlined className="text-minimalPink">
              censorship-resistant
            </Underlined>{" "}
            futures market
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="lower-fees"
          description={lowerFeesDescription}
          pointsTo="empowering-farmers"
        >
          <p>
            The{" "}
            <Underlined className="text-primaryGreen">lower fees</Underlined>{" "}
            out there and{" "}
            <Underlined className="text-primaryGreen">
              lightning-fast
            </Underlined>{" "}
            trades
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="empowering-farmers"
          description={empoweringFarmersDescription}
          pointsTo="buy-cielo"
        >
          <p>
            <Underlined className="text-oceanGreen">
              Empowering Farmers
            </Underlined>
            ,{" "}
            <Underlined className="text-oceanGreen">
              boosting investors
            </Underlined>{" "}
            and changing the world
          </p>
        </DiscoverCard>
      </div>
    </div>
  )
}
