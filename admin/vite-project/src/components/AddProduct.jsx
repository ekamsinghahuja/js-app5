import React from 'react'
import './add.css'


const AddProduct = () => {
  return (
    <div className='add-product'>
      <div className="addproduct-itemfeild">
        <p>Product title</p>
        <input type="text" name = 'name' placeholder='Type here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfeild">
            <p>Price</p>
            <input type="text" name='old_price' placeholder='Type here'/>
        </div>
        <div className="addproduct-itemfeild">
            <p>Offer-Price</p>
            <input type="text" name='old_price' placeholder='Type here'/>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
