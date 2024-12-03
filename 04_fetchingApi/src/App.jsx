
import React, { useState, useEffect } from 'react'
import { GetFetch, GetRandomUser } from './api/getFetch'
import { PostCard } from './components/PostCard'
import './App.css'
import UserCard from './components/UserCard'

function App() {

  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(null)


  useEffect(() => { GetRandomUser().then(user => setUserData(user.results[0])) }, [])

  useEffect(() => {
    GetFetch().then(res => setData(res))
  }, [])





  console.log(userData)

  return (
    <>

      {userData && <UserCard data={userData} />}



      <div>
        {data ? data.map(p => <PostCard id={p.id} title={p.title} body={p.body} />) : null}
      </div>
    </>
  )
}

export default App
