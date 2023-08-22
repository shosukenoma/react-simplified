import { React, useState } from 'react'

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  function push(val) {
    setArray(arr => [...arr, val])
  }

  function replace(targetIndex, newElement) {
    setArray(arr => [...arr.slice(0, targetIndex), newElement, ...arr.slice(targetIndex+1)])
  }

  function filter(callback) {
    setArray(arr => arr.filter(callback)) // n => n < 3
  }

  function remove(targetIndex) {
    setArray(arr => [...arr.slice(0, targetIndex), ...arr.slice(targetIndex+1)])
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(initialArray)
  }

  return {
    array, set: setArray, push, replace, filter, remove, clear, reset
  }
}