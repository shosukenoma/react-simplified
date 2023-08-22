import { React, useState } from 'react'

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  function push(val) {
    setArray([...array, val])
  }

  function replace(targetIndex, newElement) {
    setArray([...array.slice(0, targetIndex), newElement, ...array.slice(targetIndex+1)])
  }

  function filter(callback) {
    setArray(array.filter(callback)) // n => n < 3
  }

  function remove(targetIndex) {
    setArray([...array.slice(0, targetIndex), ...array.slice(targetIndex+1)])
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