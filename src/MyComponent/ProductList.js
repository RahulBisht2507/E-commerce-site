import React from 'react'
import { ProductCard } from './ProductCard'

const products = [
    {
        id: 1,
        image: "./ProductImages/Purse.webp",
        name: 'Product 1',
        price: 50
    },
    {
        id: 2,
        image: "./ProductImages/Shoes.jpg",
        name: 'Product 2',
        price: 100
    },
    {
        id: 3,
        image: "./ProductImages/what.png",
        name: 'Product 3',
        price: 150
    }
]

export const ProductList = ({addtocart}) => {
  return (
    <div  style={{display: 'flex',gap:"20px", marginLeft: "190px",marginTop: "120px"}} >
        {products.map((product) =>(
            <ProductCard key = {product.id} product= {product} addtocart={addtocart} />
        ))}
    </div>
  )
}
