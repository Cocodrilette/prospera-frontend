import { isValidEmail } from "./is-valid-email"

export function isValidName(name: string | undefined) {
  if (name && isValidEmail(name)) return false
  return name !== undefined && name.length > 5
}
