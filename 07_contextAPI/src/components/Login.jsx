import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { setUser } = useContext(UserContext)

  const HandleClick = (e) => {
    e.preventDefault()
    
    setUser({ username, password })


  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
      <button onClick={HandleClick} >Submit</button>
    </div>
  )
}

export default Login