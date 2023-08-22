import { React, useEffect, useState} from 'react'

export function useFetch(url, options={}) {
  const [isLoading, setIsLoading] = useState(true)  
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})

  const controller = new AbortController()

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    setData(undefined)

    fetch(url, {signal: controller.signal, ...options})
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => {
      if (e.name === "AbortError") return

      setIsError(true)
    })
    .finally(() => {
      if (controller.signal.aborted) return
      setIsLoading(false)
    })

    return () => {
      controller.abort()
    }
  }, [url])

  return {isLoading, isError, data}
}