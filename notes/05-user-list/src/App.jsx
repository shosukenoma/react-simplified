import { useState, useEffect } from "react"
import User from "./User"

function App() {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    
    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
    .then(res => res.json())
    .then(data => {
      setUserList(data)
    })
    .finally( () => {
      setLoading(false)
    })

    // return () => {
    //   controller.abort()
    // }
  }, [])
  
  return (
    <>
      <h1>User List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {userList.map(item => {
            return <User name={item.name} key={item.id} />
          })}
        </ul>
      )}
    </>
  )
}

export default App
