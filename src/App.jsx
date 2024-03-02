import { useState } from 'react'
import './App.css'
import Admin from './Components/Admin'
import Consumer from './Components/Consumer'
import Header from './Components/Header'
import ContextProvider from './store/ContextProvider'
import Cart from './Components/Cart/Cart'

function App() {
  const [cartIsShown,setCartIsShown] = useState(false)
  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
  return (
    <ContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onCartShown={showCartHandler}/>
      <Admin />
      <Consumer />
    </ContextProvider>
  )
}

export default App
