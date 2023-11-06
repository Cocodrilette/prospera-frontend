export function isValidEmail(email: string): boolean {
  // Regular expression that matches most valid email formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
