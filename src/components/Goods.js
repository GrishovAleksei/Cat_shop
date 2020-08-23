import React from 'react';
import Cart from './Cart.js'

const Goods = ({ data }) => {
  return (
    <div className="content">
      { data.map((item, index) => (
        <Cart item={item} key={index}/>
      ))}
    </div>
  )
}

export default Goods