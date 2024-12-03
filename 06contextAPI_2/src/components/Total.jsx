import React, { useContext } from 'react'

import { CartContext } from '../context/Cart.jsx'


const Total = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      {
        items && items.map((item) => <li>{item.name} - ${item.price}</li>)
      }
      <h2>Total Bill:{total}</h2>
    </div>
  )
}

export default Total