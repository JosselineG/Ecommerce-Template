import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navbar from "../../Components/Navbar"

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../../redux/store/storeSlice';



function Cart() {


  const [empty, setEmpty] = useState(true)


  const cart = useSelector((state) => state.cart.cart)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const dispatch = useDispatch()




  useEffect(() => {

    //If length is greater than or equal to 1 set the empty to false and add the list of items to cart
    if (cart.length >= 1) {
      setEmpty(false)
    }



  }, [cart.length])



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
                    <p> {'$' + prods.price}</p>

                    <div className='buttons'>

                      <button onClick={() => { dispatch(decrement(prods)) }}>
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

          {cart.map((prods) => (

            <div className='Items' key={prods.id}>

              <div className='CheckoutItems' >
                <p> {prods.productName}</p>
                <p> {'$' + prods.price * prods.quantity}</p>

              </div>
            </div>

          ))}


          <h4 className='total'>Total: ${Math.round(1000 * totalAmount) / 1000} </h4>


        </div>


      </div>
    </div>
  )

}

export default Cart