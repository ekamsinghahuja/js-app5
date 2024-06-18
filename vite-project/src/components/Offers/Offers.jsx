import React from 'react'
import './off.css'
import excusive_img from '../../assets/exclusive_image.png'
import exee from './exe.png'

const Offers = () => {
  return (
    <div className='offer-container'>
      <div className='offer'>
        <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>Offer for You</h1>
          <p>ONLY ON THE BEST SELLER PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className='offers-right'>
          <img src={exee} alt="Exclusive Offer" />
        </div>
      </div>
    </div>
  )
}

export default Offers

