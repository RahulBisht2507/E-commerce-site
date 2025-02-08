import React from 'react'
import { ProductList } from '../MyComponent/ProductList.js';

 const Home = ({addtocart}) => {
  return (
    <div className="text-center"  style={{
      backgroundColor:"#EDE8F5"
    }}>
        <h1>Welcome to My E-Commerce Site</h1>
        <ProductList addtocart={addtocart}></ProductList>
    </div>
  )
}

export default Home;
