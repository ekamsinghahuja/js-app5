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
    const [cartItems, setCartData] = useState(getCartDefault);
    const fetchCartData = async () => {
        const token = localStorage.getItem('auth-token'); 
        if (token) {
            const response = await fetch('https://ecomm-website-backend.onrender.com/cartget', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setCartData(data.cartData);
            // console.log(cartItems)
            // console.log(data)
        }
    };
    const fetchAllProducts = async () => {
        try {
            const response = await fetch('https://ecomm-website-backend.onrender.com/allproduct');
            const data = await response.json();
            // console.log(data);
            setAllProduct(data);
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        
        fetchAllProducts()
        fetchCartData()
        
    }, []);
    
    const addToCart = (itemId)=>{
        setCartData((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if (localStorage.getItem('auth-token')) {
            const authToken = localStorage.getItem('auth-token');
    
            fetch('https://ecomm-website-backend.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`, // Assuming you are using JWT authorization
                },
                body: JSON.stringify({
                    itemId: itemId,
                }),
            })
            .then((response) =>response.json())
            .then((data)=>console.log(data))
        } else {
            // Handle case where user is not authenticated
            console.log('User is not authenticated. Please login.');
        }
    }
    const removeToCart = (itemId)=>{
        setCartData((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')) {
            const authToken = localStorage.getItem('auth-token');
    
            fetch('https://ecomm-website-backend.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    itemId: itemId,
                }),
            })
            .then((response) =>response.json())
            .then((data)=>console.log(data))
        } else {
           
            console.log('User is not authenticated. Please login.');
        }
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
        if (all_product.length === 0) return 0; 
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



