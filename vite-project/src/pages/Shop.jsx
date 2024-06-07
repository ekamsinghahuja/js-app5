import React, { useEffect } from 'react';
import Hero from '../Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Newcollection from '../components/Newcollection/Newcollection'
import Newsletter from '../components/Newsletter/Newsletter';

const Shop = () => {
  

   
  return (
    <div>
       <Hero  />
        <Popular  />
        <Offers  />
        <Newcollection />
        <Newsletter />
      
    </div>
  )
}

export default Shop
