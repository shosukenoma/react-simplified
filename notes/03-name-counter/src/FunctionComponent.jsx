import { React, useState } from 'react'

function FunctionComponent() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubtract = () => {
    setAge(
      (currAge) => {
        if (currAge > 0) {
          return currAge - 1
        } else {
          return 0
        }
      }
    )
  }

  const handleAdd = () => {
    setAge(
      (currAge) => {return currAge + 1}
    )
  }

  return (
    <div>
      <input type="text" defaultValue={"Enter your name"} value={name} onChange={handleChange}/>
      <br />
      <br />
      <button onClick={handleSubtract}>-</button>
      <span>{age}</span>
      <button onClick={handleAdd}>+</button>
      <br />
      <br />
      <p>My name is {name} and I am {age} years old.</p>
    </div>
  )
}

export default FunctionComponent