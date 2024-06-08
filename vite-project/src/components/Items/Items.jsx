import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Items = (props) => {
  return (
    <div className='item'>
        <Link to={`/products/${props.id}`}>
        <img onClick={window.scroll(0,0)} src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <div className="ite-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items
