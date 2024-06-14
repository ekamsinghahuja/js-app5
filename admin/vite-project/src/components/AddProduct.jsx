import React, { useState } from 'react'
import './add.css'
import upload_area from '../assets/upload_area.svg'
import { Form } from 'react-router-dom';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    })

    const Add_product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product',image);
        await fetch('https://ecomm-website-backend.onrender.com/upload',{
            method:'POST',
            header:{
                Accept:'application/json',
            },
            body:formData,

        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.image_url;
            await fetch('https://ecomm-website-backend.onrender.com/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),

            }).then((resp=>resp.json())).then((data)=>{
                data.success?alert("product added"):alert("failed");
            })
        }
    }

    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setProductDetails({ ...productDetails, image: file });
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input type="text" onChange={changeHandler} name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer-Price</p>
                    <input type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="Upload area" />
                </label>
                <input type="file" name="image" id='file-input' onChange={imageHandler} hidden />
            </div>
            <button onClick={Add_product} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct
