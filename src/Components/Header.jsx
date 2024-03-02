import React,{useContext} from 'react'
import CartContext from '../store/CartContext';
import { FaCartArrowDown } from "react-icons/fa";
import "./Header.css"
const Header = (props) => {
    const {totalItemsInCart} = useContext(CartContext)
  return (
    <header>
        <h1>E-Kart</h1>
        <button onClick={props.onCartShown}><FaCartArrowDown /> {totalItemsInCart} </button>
    </header>
  )
}

export default Header