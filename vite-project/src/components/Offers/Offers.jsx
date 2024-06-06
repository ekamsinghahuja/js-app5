import React from 'react'
import './off.css'
import excusive_img from '../../assets/exclusive_image.png'



const Offers = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offer for You</h1>
            <p>ONLY ON THE BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={excusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers
