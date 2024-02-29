import React,{useState} from 'react'
import CartContext from './CartContext'

const ContextProvider = (props) => {
    const [items,setItems] =useState([])

    const addItem = (item) =>{
        setItems((prev)=>[...prev,item])
    }
    const handleItemAvailability = (id,size) =>{
      for(let i=0;i<items.length;i++)
      {
        if(id==items[i]['id'] && items[i][size]>1){
          setItems((prev)=>{
            prev[i][size]=prev[i][size]-1
            return [...prev]
          }) 
          break;
        }
      }
    }

   const cartContext = {
    items:items,
    addItem:addItem,
    handleItemAvailability:handleItemAvailability,
   }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider