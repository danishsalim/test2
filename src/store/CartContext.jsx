import React,{createContext} from 'react'

const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
})

export default CartContext