import React from 'react'

export const ProductCard = ({product,addtocart}) => {
  return (
    <div className="card" style={{width: "18rem",background: "#7091E6", }}>
    <img src={product.image}  className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary" style={{background:"rgb(0, 0, 0)"}} onClick={()=>addtocart(product)}>Add to Cart</a>
    </div>
  </div>
  )
}
