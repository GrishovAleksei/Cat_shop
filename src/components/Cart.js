import React, {useState} from 'react'
import Subtitle, {Status} from './Subtitle.js'
import './Cart.css'

function Circle({weight}) {
  return (
    <div className="circle-wrapper">
      <div className="circle-text">
        <span className="weight">{weight}</span><br/>
        <span className="measure">кг</span>
      </div>
    </div>
  )
}

function Cart ({ item }) {
  let containerClass = '',
      subtitle;
  
  const [active, setActive] = useState(false)
  const [firstLeave, setFirstLeave] = useState(true)

  if(!item.available) {
    containerClass = " container-disabled"
    subtitle = <Subtitle status = {Status.DISABLED}
                         info = {item.description}/>
  } else if (active) {
    if(firstLeave) {
      containerClass = " container-active first-mouse-leave"
    }
    else containerClass = " container-active"
    subtitle = <Subtitle status = {Status.ACTIVE}
                         info = {item.selected}/>
  } else subtitle = <Subtitle status = {Status.NOT_ACTIVE}
                              toggle = {setActive}/>

  return (
    <div>
      <div  className={"container" + containerClass}
            onClick={
              item.available
              ? () => {
                setActive(!active)
                setFirstLeave(true)
              }
              : null
            }
            onMouseLeave={
              active && firstLeave
                ? () => setFirstLeave(false) 
                : null 
            }
      >
        <div className="cart-wrapper">
          <p className="title"></p>
          <p className="name">{item.name}</p>
          <p className="description">{item.description}</p>
          <p className="text">{item.portions}</p>
          <p className="text">{item.presents}</p>
          <p className="text">{item.comments}</p>
        </div>
        <Circle weight={item.weight}/>
      </div>
      {subtitle}
    </div>
  )
}
export default Cart


