import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Items from '../components/Items/Items'

const ShopCategpry = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span>Out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    Sort by  <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                        return null;
                    })
                }
            </div>
        </div>
    );
}

export default ShopCategpry
