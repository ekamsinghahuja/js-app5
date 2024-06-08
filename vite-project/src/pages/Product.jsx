import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DesBox from '../components/DesBox/DesBox'
import RelatedProd from '../components/RelatedProd/RelatedProd'

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id==Number(productId));

  return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DesBox/>
        <RelatedProd />
      
    </div>
  )
}

export default Product
