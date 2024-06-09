import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

function CartItem() {
    const { all_product, cartItems, removeToCart, getTotalCartAmount, getTotalCartitems } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            {getTotalCartitems() === 0 ? (
                <h1 className='nothing-in-cart'>Looks like there's nothing in your cart</h1>
            ) : (
                <>
                    <div className="cartitem-format-main">
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {all_product.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id} className="cartitems-format">
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>{e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>{e.new_price * cartItems[e.id]}</p>
                                    <img src={remove_icon} onClick={() => { removeToCart(e.id); }} alt="Remove" />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <p>Shipping fee</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <h3>Total</h3>
                                    <h3>${getTotalCartAmount()}</h3>
                                </div>
                            </div>
                            <button className='proceed-to-checkout'>Proceed to Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;
