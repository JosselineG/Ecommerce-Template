import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navbar from "../../Components/Navbar"
import { breads } from '../breads';
import { drinks } from '../drinks'
import { pastry } from '../pastry'

function Cart(props) {

  const [empty, setEmpty] = useState()

/*   useEffect(() => {
if(props.Items){
  setEmpty(false);
}else{
  setEmpty(true)
}
},[props.Items])
console.log("Items being sent to car" + " " + props.Items)
 */

  return (
    <div className='cart'>

       <Navbar  />   

      <h1>Cart</h1>

      <div className='cartListPay'>

        <div className='cartItemsList'>
          {empty ?


            <h3>Cart is empty</h3>
            :
         
            <div className='list'>

"not empty"
{/* 
            {breads.map((bread,index) => 
                  <li key={index}>
             {bread.price}
              
              </li>

              )}
 */}

            </div>

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