type StorageHook = {
  set: (key: string, value: any) => void
  get: (key: string) => any
  getUser: () => any
}

export const useStorage = (): StorageHook => {
  function set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  function get(key: string) {
    let value = null
    value = window.localStorage.getItem(key)

    return value ? JSON.parse(value) : null
  }

  function getUser() {
    return get("user")
  }

  return {
    set,
    get,
    getUser,
  }
}
