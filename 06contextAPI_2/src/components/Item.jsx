import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart.jsx'
const Item = (props) => {
  const cartState = useContext(CartContext)
  // console.log(cartState);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>${props.price}</p>
      <button onClick={() => cartState.setItems([...cartState.items, { name: props.name, price: props.price }])}>Add to cart</button>
    </div>
  )
}

export default Item