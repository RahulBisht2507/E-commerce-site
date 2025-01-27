import React from 'react'
import images from './ProductImages/what.png'

export const ProductCard = ({product,addtocart}) => {
  return (
    <div style={{background:"lightyellow    ",border: "1px solid black", padding: "120px"}}>
        <img src = {images} alt={product.name} style={{width: "120px", height: "100px"}} />  
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button className='btn btn-outline-success'  onClick={()=>addtocart(product)}>Add to Cart</button>
    </div>
  )
}
