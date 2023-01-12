import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>

<div className='socialMedia'>
      <h2>Social Media</h2>
      <div  className='mIcons'>
    <FacebookIcon sx={{ fontSize: 40 }} />
      <InstagramIcon sx={{ fontSize: 40 }} />
    </div>
    </div>
    </div>
  )
}

export default Footer