interface HttpProvider {
  post: (
    url: string,
    options?: {
      headers?: any
      body?: any
    }
  ) => Promise<any>
}

/**
 * @notice This is a provider for the http requests (use the Fetch API)
 */
export function HttpProvider(): HttpProvider {
  /**
   *
   * @param url The url to post to
   * @param headers The headers to send
   * @param body The body to send
   * @param options Optional object to pass to fetch
   */
  const post = async (url: string, options?: { headers?: any; body?: any }) => {
    return fetch(url, {
      method: "POST",
      headers: options?.headers,
      body: options?.body,
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => {
        console.log("error", error)
      })
  }

  return { post }
}
