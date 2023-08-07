import UserCard from './UserCard'
import './user.css'
import user from './user.json'

function App() {
  return (
    <>
      <UserCard name={user.name} phoneNumber={user.phoneNumber} age={user.age} address={user.address} />
    </>
  )
}

export default App

