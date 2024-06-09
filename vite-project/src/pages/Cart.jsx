import React, { useContext } from 'react'
import CartItem from '../components/CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  // const {all_product,cartItems,removeToCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartPage'>
      <CartItem/>
      
    </div>
  )
}

export default Cart
