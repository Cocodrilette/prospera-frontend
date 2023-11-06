export function isValidAge(age: string) {
  if (age === undefined) return false
  if (isNaN(Number(age))) return false
  const ageNumber = Number(age)
  return ageNumber >= 18 && ageNumber <= 100
}
