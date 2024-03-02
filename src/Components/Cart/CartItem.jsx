/* eslint-disable react/prop-types */

import "./CartItem.css"
const CartItem = (props) => {
  return (
    <>
        <li>
            <div className='container'>
                <span>{props.name}</span>
                <div className="size">
                    <span>
                        {props.large>0?props.large+"L":""}
                    </span>
                    <span>
                        {props.medium>0?props.medium+"M":""}
                    </span>
                    <span>
                        {props.small>0?props.small+"S":""}
                    </span> 
                </div>
                <span>${props.price}</span>
            </div>
        </li>
    </>
  )
}

export default CartItem