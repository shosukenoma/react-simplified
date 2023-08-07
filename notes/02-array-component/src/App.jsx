import { useState } from 'react'

const INITIAL_ARRAY = ["A", "B", "C"]

function App() {
  const [array, setArray] = useState(INITIAL_ARRAY)

  const removeFirstElement = () => {
    setArray(currentArray => {
      return currentArray.slice(1);
    })
  }

  const removeSpecificLetter = (letter) => {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter);
    })
  }
  
  const addLetterToStart = (letter) => {
    setArray(currentArray => {
      return [letter, ...currentArray];
    })
  }

  const addLetterToEnd = (letter) => {
    setArray(currentArray => {
      return [...currentArray, letter];
    })
  }

  const clear = () => {
    setArray([])
  }

  const reset = () => {
    setArray([INITIAL_ARRAY])
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add To Start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      {array.join(", ")}
    </div>
  )
}

export default App
