type StorageHook = {
  set: (key: string, value: any) => void
  get: (key: string) => any
}

export const useStorage = (): StorageHook => {
  function set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  function get(key: string) {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  return {
    set,
    get,
  }
}
