import React,{useState} from 'react'
import CartContext from './CartContext'

const ContextProvider = (props) => {
    const [items,setItems] =useState([])
    const [cartItems,setCartItems] = useState([])
    const [totalItemsInCart,setTotalItemsInCart] =useState(0)



    const addItem = (item) =>{
        setItems((prev)=>[...prev,item])
    }
    const updateStockItems =(id,size)=>{
          let updatedStockItemsList = items.map((item)=>{
            if(item.id==id && item[size]>0)
              {
                return {...item,[size]:item[size]-1}
              }
            return item;
          })
      setItems(updatedStockItemsList)
      console.log(items,cartItems)
    }
    const updateCartItems=(product,size)=>{
      let flag=true
      let cartUpadatedItems = cartItems.map((item)=>{
                if(item.id==product.id)
                {
                   flag=false
                }
                if(item.id==product.id && product[size]>0)
                {
                  return {...item,[size]:(item[size] || 0 ) +1}
                }
                return item
              }) ;
        if(flag && product[size])
          {
            setCartItems((prev)=>[...prev,
              {
                id:product.id,
                name:product.name,
                price:product.price,
                large:0,
                small:0,
                medium:0,
                [size]:1,  
              }])
          }
        else
        {
          setCartItems(cartUpadatedItems)
        }
        
    }

    const handleItemAvailability = (product,size) =>{

        updateStockItems(product.id,size)
        updateCartItems(product,size)
        
        setTotalItemsInCart((prev)=>{
          if(product[size]>0)
          {
            return prev+1
          }
          else
            return prev
        }) 
        
        
    }

    


   const cartContext = {
    items:items,
    addItem:addItem,
    handleItemAvailability:handleItemAvailability,
    cartItems:cartItems,
    setCartItems:setCartItems,
    totalItemsInCart:totalItemsInCart,
    setTotalItemsInCart:setTotalItemsInCart,
   }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider