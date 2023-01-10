import React from 'react'
import './Shop.css'
import { breads } from '../breads';
import { drinks } from '../drinks'
import { pastry } from '../pastry'

const Shop = () => {




  return (
    <div className='shop'>


      <h1>Breads</h1>
      <div className='productsB'>
        {breads.map(produce =>
          <div className='samp' key={produce.id}>
            <img className='prods' src={produce.productImage} />

            <p> {produce.productName}</p>
            <p> {produce.price}</p>

          </div>


        )}

      </div>
      <h1>Pastries</h1>
      <div className='productsB'>

        {pastry.map(pastries =>
          <div className='samp' key={pastries.id}>
            <img className='prods' src={pastries.productImage} />

            <p> {pastries.productName}</p>
            <p> {pastries.price}</p>

          </div>


        )}

      </div>
      <h1>Beverages</h1>
      <div className='productsB'>

        {drinks.map(beverages =>
          <div className='samp' key={beverages.id}>
            <img className='prods' src={beverages.productImage} />

            <p> {beverages.productName}</p>
            <p> {beverages.price}</p>

          </div>


        )}

      </div>


    </div>
  )
}

export default Shop