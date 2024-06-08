import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const getCartDefault = ()=>{
        const cart = {}
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    }
    const [cartItems,setItems] = useState(getCartDefault());
    
    const addToCart = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeToCart = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = { all_product,cartItems,addToCart,removeToCart};
    
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
