import { Underlined } from "../../../common/text/underlined"
import { ScreenSection } from "../../../layout/screen-section"
import { DiscoverCard } from "./discover-section"

export function Discover() {
  const blockchainBasedDescription =
    "Aprovechamos el potencial de la cadena de bloques para forjar una economía segura y transparente en la que agricultores e inversores se conecten fácilmente. Nuestro token Cielo sirve como moneda y almacén de valor en el ecosistema de Prospera"
  const descentralizationDescription =
    "Mercado de futuros descentralizado para que los agricultores se cubran frente a la volatilidad de los precios y ofrezcan instrumentos financieros seguros a los inversores a través de nuestro sólido protocolo blockchain."
  const lowerFeesDescription =
    "Al prescindir de intermediarios, reducimos las comisiones y aumentamos los beneficios de agricultores e inversores. Realiza transacciones en segundos y con las comisiones más bajas del mercado."
  const empoweringFarmersDescription =
    "Comprometidos con el aprovechamiento de la tecnología para el empoderamiento de los agricultores, la innovación, el éxito de los inversores y el impacto global. Revolucionando la intersección entre agricultura e inversión para un futuro diferente."

  return (
    <div id="discover" className="bg-gray-950">
      <div className="flex flex-col text-white">
        <DiscoverCard
          id="blockchain-based"
          description={blockchainBasedDescription}
          pointsTo="decentralized"
        >
          <p>
            Economía respaldada en blockchain para interactuar con
            <Underlined className="text-indigo-600">
              {" "}
              facilidad y seguridad
            </Underlined>{" "}
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="decentralized"
          description={descentralizationDescription}
          pointsTo="lower-fees"
        >
          <p>
            Mercado de futuros{" "}
            <Underlined className="text-minimalPink">
              seguro, descentralizado y resistente
            </Underlined>
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="lower-fees"
          description={lowerFeesDescription}
          pointsTo="empowering-farmers"
        >
          <p>
            Las comisiones{" "}
            <Underlined className="text-primaryGreen">más bajas </Underlined> y
            las{" "}
            <Underlined className="text-primaryGreen">
              operaciones más rápidas
            </Underlined>{" "}
          </p>
        </DiscoverCard>
        <DiscoverCard
          id="empowering-farmers"
          description={empoweringFarmersDescription}
          pointsTo="buy-cielo"
        >
          <p>
            Empoderar a los{" "}
            <Underlined className="text-oceanGreen">agricultores,</Underlined>{" "}
            impulsar a los{" "}
            <Underlined className="text-oceanGreen">inversores</Underlined> y
            cambiar el mundo
          </p>
        </DiscoverCard>
      </div>
    </div>
  )
}
