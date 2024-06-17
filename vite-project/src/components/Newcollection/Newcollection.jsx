import React, { useEffect, useState } from 'react';
import './nxx.css';
// import new_collections from '../../assets/new_collections';
import Items from '../Items/Items';


const Newcollection = () => {
    const [new_collections,set_new_collection] = useState([]);
    useEffect(()=>{
        fetch('https://ecomm-website-backend.onrender.com/newcollection')
        .then((response)=>response.json())
        .then((data)=>set_new_collection(data))
    }, [])
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className='collections'>
                {
                    new_collections.map((item, i) => {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })
                }
            </div>
        </div>
    );
};

export default Newcollection;
