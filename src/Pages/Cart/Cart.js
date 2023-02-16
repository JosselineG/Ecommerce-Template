import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navbar from "../../Components/Navbar"

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../../redux/store/storeSlice';


function Cart() {


  const [empty, setEmpty] = useState(true)

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()




  useEffect(() => {

    //If length is greater than or equal to 1 set the empty to false and add the list of items to cart
    if (cart.length >= 1) {
      setEmpty(false)
    }


  },[cart.length])
  /* const matchedId = productList.filter((elements) => cart.includes(cart)) */

  return (
    <div className='cart'>

      <Navbar />

      <h1>Cart</h1>


      <div className='cartListPay'>

        <div className='cartItemsList'>

          {empty ? <h3>Cart is empty</h3> :

            <div className='list'>

              {cart.map((prods) => (
                <li className='samp' key={prods.id}>

                  <img alt='' className='image' src={prods.productImage} />

                  <div className='productsDescr' >
                    <p> {prods.productName}</p>
                    <p> {prods.price}</p>

                    <div className='buttons'>

                      <button onClick={() => { dispatch(decrement(prods.id)) }}>
                        -
                      </button>

                      <div className='AddToCartQuantity'>
                        {prods.quantity}
                      </div>

                      <button onClick={() => { dispatch(increment(prods)) }}>
                        +
                      </button>

                    </div>
                  </div>

                </li>

              ))}


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