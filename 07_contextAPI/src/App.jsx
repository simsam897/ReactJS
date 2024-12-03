import React from 'react'
import { UserProvider } from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserProvider>
        <Login />
        <Profile />
      </UserProvider>

    </>
  )
}

export default App
