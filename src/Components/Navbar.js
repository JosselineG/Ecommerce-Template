import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';

function Navbar() {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)



  return (<div className='navbar'>

    <div className='links'>

      <Link to={"/"} >Home </Link>

      <Link to={"/Shop"}> Shop </Link>

      <Link to={"/Cart"}>
        
         <ShoppingCartOutlinedIcon sx={{ display: "flex", alignItem: "center" }} />
          {totalQuantity}
        
        
      </Link>
    </div>

  </div>
  )


}

export default Navbar