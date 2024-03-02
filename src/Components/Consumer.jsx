import React,{useContext} from 'react'
import CartContext from '../store/CartContext'
import "./Consumer.css"

const Consumer = () => {
    const {items,handleItemAvailability} =useContext(CartContext)


    const showItems=<ul className='container'>{items.map((item)=>(
      <li key={item.id}>
        <span>{item.name}</span> 
        <span className='desc'>{item.desc}</span>
        <span>$ {item.price}</span>
        <span>
          <div className='size'>L</div>
          <button onClick={()=>handleItemAvailability(item,"large")}>{item.large}</button>
        </span>
        <span>
          <div className='shell size'>M</div>
          <button onClick={()=>handleItemAvailability(item,"medium")} >{item.medium}</button>
        </span>
        <span>
          <div className='shell size'>S</div>
          <button onClick={()=>handleItemAvailability(item,"small")} >{item.small}</button>
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