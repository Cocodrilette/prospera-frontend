export async function executeOrCatch<T, K>(
  fn: () => Promise<K>,
  onSucces?: (args: any) => Promise<T>,
  onError?: (args: any) => void
): Promise<T | undefined> {
  try {
    const result = await fn()
    if (onSucces) return onSucces(result)
  } catch (error) {
    if (onError) onError(error)
  }
}
