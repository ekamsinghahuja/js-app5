import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DesBox from '../components/DesBox/DesBox'
import RelatedProd from '../components/RelatedProd/RelatedProd'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const foundProduct = all_product.find(e => e.id === Number(productId))
        setProduct(foundProduct)
    }, [all_product, productId])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DesBox />
            <RelatedProd />
        </div>
    )
}

export default Product
