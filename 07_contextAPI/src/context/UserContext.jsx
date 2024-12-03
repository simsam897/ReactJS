import React from 'react'
import { useState } from 'react'


export const UserContext = React.createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

