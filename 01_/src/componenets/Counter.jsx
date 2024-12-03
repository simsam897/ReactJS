import React from 'react'
import { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0)
  const [value, SetValue] = useState('')




  return (
    <>
      <div className='text-center'>Counter {count}</div>

      <button onClick={() => setCount(count + 1)} className='bg-lime-300 p-3 rounded flex justify-center mx-auto mb-3'>increment</button>


      
      <button onClick={() => setCount(count - 1)} className='bg-lime-300 p-3 rounded flex justify-center mx-auto'>decrement</button>

      <h3> value is {count % 2 === 0 ? 'even' : 'odd'}</h3>
    </>
  )

}

export default Counter