import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className='navbar'>
    
    <div className='links'>
    <Link to={"/"}> Home </Link>
    <Link to={"/Shop"}> Shop </Link>
    <Link to={"/Cart"}> <ShoppingCartOutlinedIcon sx={{display:"flex" , alignItem:"center"}}/> </Link>
    </div>
    </div>
  )
}

export default Navbar