export function env() {
  function getOrThrow(key: string): string {
    const value = process.env[key]
    console.log({ value })
    if (!value) throw new Error(`Missing environment variable ${key}`)
    return value
  }

  return { getOrThrow }
}