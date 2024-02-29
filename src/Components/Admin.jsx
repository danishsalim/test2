import { useContext } from "react" 
import CartContext from "../store/CartContext"
import "./admin.css"

const Admin = () => {
    const {items,addItem} = useContext(CartContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = parseInt(Math.random()*10)
        const data= {
            id:id,
            name:e.target.name.value,
            desc:e.target.desc.value,
            price:e.target.price.value,
            large:parseInt(e.target.l.value),
            medium:parseInt(e.target.m.value),
            small:parseInt(e.target.s.value),
        }
        addItem(data)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='shell'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' required />
            </div>
            <div className='shell'>
                <label htmlFor='desc'>Description</label>
                <input type='text' id='desc' required />
            </div >
            <div className='shell'>
                <label htmlFor='price'>Price</label>
                <input type='number' id='price' required />
            </div>
            <div className='shell size'>
                <label htmlFor='l'>L</label>
                <input type='number' id="l" defaultValue={0}/>
            </div>    
            <div className='shell size'>
                <label htmlFor='m'>M</label>
                <input type='number' id="m" defaultValue={0} />
            </div>    
            <div className='shell size'>
                <label htmlFor='s'>S</label>
                <input type='number' id="s" defaultValue={0}/>
            </div>
           <button type='submit' >Add product</button>
        </form>  
    </>
  )
}

export default Admin