import React, { useState,useEffect } from 'react'
import './Pop.css'
import Item from '../Items/Items'

// import data_product from '../../assets/data'

const Popular = () => {
  const [data_product,set_pop] = useState([])
  useEffect(()=>{
    fetch('https://ecomm-website-backend.onrender.com/popinwom')
    .then((response)=>response.json())
    .then((data)=>set_pop(data));
  }, [])

  return (
    
    <div className='popular'>
        
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {
                data_product.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}  />
                })
            }
    
        </div>
    </div>
  )
}

export default Popular;

