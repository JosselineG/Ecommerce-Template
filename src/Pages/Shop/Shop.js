import React, { useEffect } from 'react'
import './Shop.css'
import { productList } from '../productList';
import Navbar from "../../Components/Navbar"

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToCart } from '../../redux/store/storeSlice';


function Shop() {


  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  useEffect(() => {

    console.log(cart)


  })


  return (

    <div className='shop'>

      <Navbar />

      <h1>Products</h1>

      <div className='productsB'>
        {productList.map((itemList) => (


          <div className='samp' key={itemList.id}>

            <img alt='' className='prods' src={itemList.productImage} />

            <p> {itemList.productName}</p>
            <p> {itemList.price}</p>


            <div className='buttonQuantity'>

              <button onClick={() => {dispatch(decrement(itemList.id)) }}>
                -
              </button>
              <div className='AddToCartQuantity'>
                {cart.map((prods) => (
                  <div key={prods.id}>

                    {prods.quantity}

                  </div>

                ))}


              </div>
              <button onClick={() => {dispatch(increment(itemList)/* , addToCart(itemList) */ )}}>
                +
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Shop