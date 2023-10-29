type FetcherMethods = "POST" | "GET" | "PUT" | "DELETE"

interface FetcherOptions {
  headers: any
  body: any
  method: FetcherMethods
}

export async function fetcher(url: string, options: FetcherOptions) {
  return fetch(url, {
    method: options.method,
    headers: options.headers,
    body: options.body,
  }).then((res) => res.json())
}
