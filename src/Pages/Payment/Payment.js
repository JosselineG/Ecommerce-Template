import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Payment.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'


const Payment = () => {

  const shippingPrice = 5
  const [tax, setTax] = useState(0)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  useEffect(() => {

    setTax(Math.round((((shippingPrice + (Math.round(100 * totalAmount) / 100)) * 0.0813) * 100)) / 100);

  },[totalAmount])


  return (
    <div className='payment'>
      <div className='headingLT'>
      <div className='Cont'>
      <Link to={"/Cart"}>
            <HomeIcon sx={{ fontSize: 40, color: 'white' }} />
          </Link>
      </div>
      <div className='Container'>
       
        <div className='Title'>
          <h1>Items({totalQuantity}) </h1>
          </div>
      </div>
      </div>
      <div className='checkOutItems'>

        <div className='fm'>
          <form>
            <div className='customerInfo'>
              <label>
                First Name:
                <input type='text'>

                </input>
              </label>

              <label>
                Last Name:
                <input type='text'>

                </input>
              </label>

              <label>
                Email:
                <input type='text'>

                </input>
              </label>


              <label>
                Address:
                <input type='text'>

                </input>
              </label>

              <label >
                City:
                <input type='text'>

                </input>
              </label>

              <label>
                State:
                <input type='text'>

                </input>
              </label>

              <label>
                Zip:
                <input type='text'>

                </input>
              </label>

              <label>
                Phone Number:
                <input type='text' w>

                </input>
              </label>
            </div>


            <div className='PaymentMethod'>
              <label>
                Name on Card:
                <input type='text'>

                </input>
              </label>


              <label>
                Card Number:
                <input type='text'>

                </input>
              </label>

              <label>
                Expires On:
                <input type='text'>

                </input>
              </label>

              <label>
                Security Code:
                <input type='text'>

                </input>
              </label>
            </div>
          </form>
        </div>

        <div className='payTotal'>
          <h1>Order Summary</h1>
          <div className='orderSummary'>
            <h4 className='text'>Items({totalQuantity}):</h4>
            <h4 className='price'> ${Math.round(100 * totalAmount) / 100}</h4>
            <h4 className='text'>Shipping & handling:</h4>
            <h4 className='price'>${shippingPrice}</h4>
            <h4 className='text'>Tax: </h4>
            <h4 className='price'>${tax}</h4>
            <h4 className='text'>Total: </h4>
            <h4 className='price'>${Math.round(100 * (shippingPrice + totalAmount + tax)) / 100} </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment