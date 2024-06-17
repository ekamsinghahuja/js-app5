import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
// import all_product from '../assets/all_product';

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const [all_product,setAllProduct] = useState([])
    const getCartDefault = ()=>{
        const cart = {}
        for (let index = 0; index < 300+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    }
    const [cartItems,setItems] = useState(getCartDefault());
    useEffect(() => {
        fetch('https://ecomm-website-backend.onrender.com/allproduct')
            .then(response => response.json())
            .then(data => setAllProduct(data))
            
    }, []);
    const addToCart = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeToCart = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
        let total=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item));
                total += iteminfo.new_price*cartItems[item];
            }
        }
        return total;
    }
    const getTotalCartitems = ()=>{
        let total=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                total += cartItems[item];
            }
        }
        return total;
    }
    const contextValue = { all_product,cartItems,addToCart,removeToCart,getTotalCartAmount,getTotalCartitems};
    
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
