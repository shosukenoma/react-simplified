import { React, useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const clickHandler = () => {
    setCounter(currentCounter => {
      return currentCounter + 1
    })
  }

  return (
    <div>
      <h1 onClick={clickHandler}>{counter}</h1>
    </div>
  )
}

export default Counter