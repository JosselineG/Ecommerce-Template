import React, { useEffect, useState } from 'react'
import './Shop.css'
import { breads } from '../breads';
import { drinks } from '../drinks'
import { pastry } from '../pastry'
import Navbar from "../../Components/Navbar"

const Shop = (props) => {


const [click,setClick] = useState()
const [quantity,setQuantity] = useState(0)
/*const [prevQ,setPrevQ] = useState(0)
const [Id,setId] = useState(1)
const [prevI,setPrevI] = useState([]) */
  const handleChange = (e) => {

    setClick(...click, e.target.name);
    setQuantity(...quantity, e.target.value);
  }


    
  const handleClick= (e) => {

 /*    if(Id == prevI){
    
      setQuantity(prevQ + 1)
      setPrevQ(quantity)

  }else if(Id == e.target.value ){
 
   setQuantity(quantity + 1)
   setPrevQ(quantity)
  

  }else{
    
    setPrevI([...prevI, Id])
    setId(e.target.value)
    setQuantity(0)
 
  } */

  setQuantity(quantity => quantity + 1)
    
   /*  console.log(Id) */
  /*   console.log(prevI) */
  }

 

  return (
    <div className='shop'>

     <Navbar className='navS'  quantity={quantity}  />


      <h1>Breads</h1>
      <div className='productsB'>
        {breads.map(produce =>
          <div className='samp' key={produce.id}>
            <img className='prods' src={produce.productImage} />

            <p> {produce.productName}</p>
            <p> {produce.price}</p>
            <button 
            
            value={produce.id}
            onChange={handleChange}
            onClick={handleClick}>
              Add to Cart 
            </button>

          </div>


        )}

      </div>

      <h1>Pastries</h1>
      <div className='productsB'>

        {pastry.map((pastries,index) => (
          <div className='samp' key={pastries.id}>
            <img className='prods' src={pastries.productImage} />

            <p> {pastries.productName}</p>
            <p> {pastries.price}</p>

            <button 
            onChange={handleChange} 
            onClick={handleClick}
            value={pastries.id}>
              Add to Cart
              </button>
          </div>


      ))}
      

      </div>
      
      <h1>Beverages</h1>
      <div className='productsB'>

        {drinks.map(beverages =>
          <div className='samp' key={beverages.id}>
            <img className='prods' src={beverages.productImage} />

            <p> {beverages.productName}</p>
            <p> {beverages.price}</p>

            <button  
            onChange={handleChange} 
            onClick={handleClick}
            value={beverages.id}>
            Add to Cart</button>

          </div>


        )}

      </div>


    </div>
  )
}

export default Shop