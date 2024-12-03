import React from 'react'


const TodoItem = (props) => {
  return (
    <div className=' p-2'>
      <li className='bg-blue-300 p-3 ml overflow-auto w-[250px] flex justify-between rounded-sm'>
        <div>
          {props.completed ? <></> : <input type="checkbox" />}
          {/* // wrapping up in curly braces is a jsx expression */}

          <span>{props.text}</span>
        </div>

        <span>
          ...
        </span>
      </li>
    </div>
  )
}

export default TodoItem