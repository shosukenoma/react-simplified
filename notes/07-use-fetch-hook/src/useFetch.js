import { React, useState, useEffect } from 'react'

export function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(true)

  useEffect(() => {
    // Reset data first
    setData(undefined)
    setIsLoading(true)
    setIsError(false)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
    .then(res => res.json())
    .then(data => setData(data))
    .catch((e) => {
      if (e.name === "AbortError") return
      setIsError(true)
    })
    .finally(() => setIsLoading(false))

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isLoading, isError }
}