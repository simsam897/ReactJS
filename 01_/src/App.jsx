import { useState } from 'react'
import Header from './componenets/Header'
import TodoItem from './componenets/TodoItem'
import AddTodoButton from './componenets/AddTodoButton'
import Counter from './componenets/Counter'


function App() {


  return (
    <>
      <div className='w-[300px] flex flex-col justify-center items-center bg-gray-200'>
        <Header />
        <TodoItem completed={true} text={'Learn React'} />
        <TodoItem text={'Learn NOdejs'} />
        <TodoItem text={'Learn mongodb'} />
        <AddTodoButton />

      </div>

      <Counter />
    </>
  )
}

export default App
