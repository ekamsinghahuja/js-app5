import React, { useEffect, useState } from 'react'
import './list.css'
import cross_icon from '../assets/cross_icon.png'

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const res = await fetch('https://ecomm-website-backend.onrender.com/allproduct');
            const data = await res.json();
            setAllProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        try {
            const res = await fetch('https://ecomm-website-backend.onrender.com/removeproduct', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });

            if (res.ok) {
                await fetchInfo();  
            } else {
                console.error("Failed to remove product:", res.statusText);
            }
        } catch (error) {
            console.error("Error removing product:", error);
        }
    }

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allproducts.map((product, index) => {
                    return (
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <img src={product.image} alt="" className='listproduct-product-icon' />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img onClick={() => { remove_product(product.id) }} src={cross_icon} alt="" className='list_product_remove_icon' />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ListProduct
