import { env } from "../../utils/env"

const { getOrThrow } = env()

export const cieloConfig = {
  address: getOrThrow("NEXT_PUBLIC_CIELO_CONTRACT_ADDRESS"),
  abi: [],
}
