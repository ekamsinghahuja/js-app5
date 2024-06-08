import React from 'react'
import './DesBox.css'


const DesBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An e-commerce website is an online platform that enables the buying and selling 
            of goods and services over the internet. These websites facilitate transactions 
            between buyers and sellers by providing a digital marketplace where products can be 
            displayed, searched for, and purchased. Key features include product listings with 
            detailed descriptions and images, a shopping cart for selected items, a checkout 
            process for completing purchases, and payment gateway integration for secure transactions. 
            Additionally, e-commerce sites often offer user accounts for tracking orders, search 
            and filter options to find specific products, customer reviews for informed 
            decision-making, and mobile compatibility for on-the-go shopping. 
            </p>
            <p>
            Types of e-commerce websites include B2C (business-to-consumer), B2B (business-to-business), 
            C2C (consumer-to-consumer), and C2B (consumer-to-business). Advantages of 
            e-commerce websites include convenience, a wider reach, cost-effectiveness, 
            personalized shopping experiences, and data analytics for business insights. 
            Popular platforms for creating e-commerce websites include Shopify, WooCommerce, 
            Magento, BigCommerce, and Squarespace.
            </p>

        </div>
    </div>
  )
}

export default DesBox
