import React from 'react'
import './Header.css'
import Navbar from "../Navbar"
import img1 from '../Header/img1.jpg'
import img2 from '../Header/img2.jpg'
import img3 from '../Header/img3.jpg'
import img4 from '../Header/img4.jpg'
import img5 from '../Header/img5-6.jpg'
function Header() {
  return (
    <div className='header'>


     
      <div className='images'>

        <img className='imageB' src={img1} alt='image1' />
        <img className='imageM' src={img2} alt='image2' />
        <img className='imageC' src={img3} alt='image3' />
        <img className='imageM' src={img4} alt='image4' />
        <img className='imageL' src={img5} alt='image5' />
      </div>

      <div className='title'><h1>Online Bakery</h1></div>
      <Navbar className='navB' />


    </div>
  )
}

export default Header 