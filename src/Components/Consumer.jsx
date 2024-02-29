import React,{useContext} from 'react'
import CartContext from '../store/CartContext'
import "./Consumer.css"

const Consumer = () => {
    const {items,handleItemAvailability} =useContext(CartContext)


    const showItems=<ul className='container'>{items.map((item)=>(
      <li key={item.id}>
        <span>{item.name}</span> 
        <span>{item.desc}</span>
        <span>$ {item.price}</span>
        <span>
          <div>L</div>
          <button onClick={()=>handleItemAvailability(item.id,item.l)}>{item.large}</button>
        </span>
        <span>
          <div>M</div>
          <button onClick={()=>handleItemAvailability(item.id,item.m)} >{item.medium}</button>
        </span>
        <span>
          <div>S</div>
          <button onClick={()=>handleItemAvailability(item.id,item.s)} >{item.small}</button>
        </span>

      </li>
    )) }</ul> 

  return (
    <div>
        {showItems}
    </div>
  )
}

export default Consumer