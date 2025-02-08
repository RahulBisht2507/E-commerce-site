import React from 'react'
import { ProductCard } from './ProductCard'
import image1 from "./ProductImages/Purse.webp"
import image2 from "./ProductImages/Shoes.jpg"
import image3 from "./ProductImages/what.png"

const products = [
    {
        id: 1,
        image: image1,
        name: 'Purse',
        price: 50,
        desc: 'This Purse is made up of leather with very little artifaction'
    },
    {
        id: 2,
        image: image1,
        name: 'Product 2',
        price: 100,
        desc: 'this product desc is yet to known and published'
    },
    {
        id: 3,
        image: image1,
        name: 'Product 3',
        price: 150,
        desc: 'this product desc is yet to known and published'
    }
]

export const ProductList = ({addtocart}) => {
  return (
    <div  style={{display: 'flex',gap:"20px", marginLeft: "300px",marginTop: "80px", paddingBottom: "80px"}} >
        {products.map((product) =>(
            <ProductCard key = {product.id} product= {product} addtocart={addtocart} />
        ))}
    </div>
  )
}
