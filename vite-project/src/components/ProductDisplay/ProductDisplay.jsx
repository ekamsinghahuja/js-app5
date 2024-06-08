import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="product-display-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>{product.old_price}</div>
                <div className='productdisplay-right-prices-old'>{product.new_price}</div>
            </div>
            <div className="product-right-display">
                Customers like the fit, comfort, quality and value of the shirt. 
                They mention that it's a stylish shirt, the quality of the cloth 
                is good and it'll be a good value for money. Customers are also impressed 
                with the appearance, 
                saying that it looks good and is textured.
            </div>
            <div className="product-display-righr-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button className='add-to-cart-button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women T-shirt Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern,Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay
