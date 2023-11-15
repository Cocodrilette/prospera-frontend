import { useState } from "react"

type ServerResponse = {
  data: any
  error: any
}

type ServerHook = {
  get: (url: string) => Promise<ServerResponse | undefined>
  post: (
    url: string,
    body: any,
    headers?: any
  ) => Promise<ServerResponse | undefined>
  patch: (url: string, body: any) => Promise<ServerResponse | undefined>
  delete: (url: string) => Promise<ServerResponse | undefined>
  error: any
}

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

export const useServer = (): ServerHook => {
  const [error, setError] = useState<string | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_BACKEND_API_KEY ?? ""
  const serverBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? ""

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  }

  const get = async (url: string): Promise<ServerResponse | undefined> => {
    return await executeOrCatch(
      () => fetch(`${serverBaseUrl}${url}`, { method: "GET", headers }),
      handleResponse,
      setError
    )
  }

  const post = async (
    url: string,
    body: any,
    customHeaders?: any
  ): Promise<ServerResponse | undefined> => {
    return await executeOrCatch(
      () =>
        fetch(`${serverBaseUrl}${url}`, {
          method: "POST",
          headers: {
            ...headers,
            ...customHeaders,
          },
          body: JSON.stringify(body),
        }),
      handleResponse,
      (error) => setError(JSON.stringify(error))
    )
  }

  const patch = async (
    url: string,
    body: any
  ): Promise<ServerResponse | undefined> => {
    return await executeOrCatch(
      () =>
        fetch(`${serverBaseUrl}${url}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify(body),
        }),
      handleResponse,
      setError
    )
  }

  const del = async (url: string): Promise<ServerResponse | undefined> => {
    return await executeOrCatch(
      () => fetch(`${serverBaseUrl}${url}`, { method: "DELETE", headers }),
      handleResponse,
      setError
    )
  }

  const handleResponse = async (
    response: Response
  ): Promise<ServerResponse> => {
    const data = await response.json()

    if (!response.ok) {
      setError(data)
      return { data: null, error: data }
    }

    return { data, error: null }
  }

  return { get, post, patch, delete: del, error }
}
