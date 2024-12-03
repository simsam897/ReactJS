import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Profile = () => {

  const { user } = useContext(UserContext)
  if (!user) return <div>please login</div>
  return (
    <div>


      <div>welcome {user.username}</div>


    </div>
  )
}

export default Profile