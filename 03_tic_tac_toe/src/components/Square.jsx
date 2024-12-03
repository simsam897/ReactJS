import React from 'react'

const Square = (props) => {

  
  return (
    <div className='border-2 border-gray-200 w-[100px] h-[100px] flex justify-center items-center m-[px]' onClick={props.onClick}>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square