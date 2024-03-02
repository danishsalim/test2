import React,{useContext} from 'react'
import CartContext from '../../store/CartContext'
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import "./Cart.css"

const Cart = (props) => {
 const {cartItems} =useContext(CartContext)
 let total=0;
 const cart = <ul>
                {cartItems.map((item)=>{
                    let itemTotalprice= 
                    ((item.small+item.medium+item.large)*item.price).toFixed(2)
                    total+=parseInt(itemTotalprice)
                   return <CartItem key={item.id} name={item.name} large={item.large} medium={item.medium} small={item.small} price={itemTotalprice} total={total}/>
                })}
            </ul>
 
  return (
    <Modal onClose={props.onClose}>
        <div className='main'>
            {cart}
            <div className='totalAmount'>Total Amount : ${total}</div>
            <div className='buttons'>
                <button onClick={props.onClose}>close</button>
                <button>placeOrder</button>
            </div>
        </div> 
        
        
    </Modal>
       
  )
}

export default Cart