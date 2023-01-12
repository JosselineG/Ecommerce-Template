import React, { useState } from 'react'
import './Cart.css'
import Navbar from "../../Components/Navbar"

const Cart = (props) => {

  const [empty, setEmpty] = useState(true)




  return (
    <div className='cart'>

      <Navbar className='navB'  quantity={props.quantity}  />

      <h1>Cart</h1>

      <div className='cartListPay'>

        <div className='cartItemsList'>
          {empty ?


            <h3>Cart is empty</h3>
            :
         
            <h3>Cart is not empty</h3>

          }

        </div>

        <div className='cartItemsPay'>


          <h2>CheckOut</h2>


        </div>


      </div>



    </div>
  )
}

export default Cart