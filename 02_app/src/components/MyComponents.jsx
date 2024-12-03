import React, { useState, useEffect } from 'react'

const MyComponents = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)

  useEffect(() => {
    console.log('MyComponents is mounting')

    return () => {
      console.log('MyComponents is unmounting')
    }

  }, [])

  useEffect(() => {
    console.log('count is updated')
    return () => {
      console.log('count is unmounting')
    }
  }, [count])
  return (
    <>
      <div>
        <p>{count}</p>
        <p>{count2}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 + 2)}>Increment</button>

      </div>
    </>
  )
}

export default MyComponents
