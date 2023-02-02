import React, { useState } from 'react'
import './Shop.css'
import { breads } from '../breads';
import { drinks } from '../drinks'
import { pastry } from '../pastry'
import Navbar from "../../Components/Navbar"


function Shop(props) {


  const [quantity, setQuantity] = useState(0)
  const [addItems, setAddItems] = useState([])
  const [ItemsId, setItemsId] = useState([])


  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(...quantity);
  }


  const handleIncrement = (e,bread,beverages,pastries) => {
    e.preventDefault();


   setQuantity(bread.quantity = bread.quantity + 1)
   setItemsId(e.target.id)
   setAddItems({[ItemsId]: quantity})

   setQuantity(pastries.quantity = pastries.quantity + 1)
   setItemsId(e.target.id)
   setAddItems({[ItemsId]: quantity})

   setQuantity(beverages.quantity = beverages.quantity + 1)
   setItemsId(e.target.id)
   setAddItems({[ItemsId]: quantity})


    console.log(addItems)
  }

  const handleDecrement = (e,bread,pastries,beverages) => {
    e.preventDefault();

    setQuantity(bread.quantity = bread.quantity - 1)
    setItemsId(e.target.id)
    setAddItems({[ItemsId]: quantity})

    
    setQuantity(pastries.quantity = pastries.quantity - 1)
    setItemsId(e.target.id)
    setAddItems({[ItemsId]: quantity})

    setQuantity(beverages.quantity = beverages.quantity - 1)
    setItemsId(e.target.id)
    setAddItems({[ItemsId]: quantity})


    console.log(addItems)

  }


  return (

    <div className='shop'>

      <Navbar quantity={quantity} />


      <h1>Breads</h1>
      <div className='productsB'>
        {breads.map((bread) => (

          
          <div className='samp' key={bread.id}>

            <img className='prods' src={bread.productImage} />
            
            <p> {bread.productName}</p>
            <p> {bread.price}</p>


            <div className='buttonQuantity'>

              <button id={bread.id} onChange={handleChange} onClick={(e)=>{handleDecrement(e,bread)}}>
                -
              </button>

                <div className='AddToCartQuantity'>
                 {bread.quantity}
                </div>

              <button id={bread.id}  onChange={handleChange} onClick={(e)=>{handleIncrement(e,bread)}}>
              </button>
            
            </div>

          </div>

    ))}

      </div>

      <h1>Pastries</h1>
      <div className='productsB'>

        {pastry.map((pastries) => (
          <div className='samp' key={pastries.id}>

            <img className='prods' src={pastries.productImage} />
            <p> {pastries.productName}</p>
            <p> {pastries.price}</p>



            <div className='buttonQuantity'>

              <button id={pastries.id} onChange={handleChange} onClick={(e)=>{handleDecrement(e,pastries)}}>
                -
              </button>

              <div className='AddToCartQuantity'>
                {pastries.quantity}
              </div>

              <button id={pastries.id} onChange={handleChange} onClick={(e)=>{handleIncrement(e,pastries)}}>
                +
              </button>

            </div>

          </div>

        ))}


      </div>

      <h1>Beverages</h1>
      <div className='productsB'>

        {drinks.map((beverages) => (
          <div className='samp' key={beverages.id}>

            <img className='prods' src={beverages.productImage} />
            <p> {beverages.productName}</p>
            <p> {beverages.price}</p>


            <div className='buttonQuantity'>

              <button id={beverages.id}  onChange={handleChange} onClick={(e)=>{handleDecrement(e,beverages)}}>
                -
              </button>

              <div className='AddToCartQuantity'>
                {beverages.quantity}
              </div>

              <button id={beverages.id} onChange={handleChange}  onClick={(e)=>{handleIncrement(e,beverages)}}>
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