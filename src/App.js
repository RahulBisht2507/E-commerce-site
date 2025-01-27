import './App.css';
import Header from "./MyComponent/Header.js";
import Home from "./Pages/Home.js";
import { useState } from 'react';

function App() {

const [cartItems, setCartItems] = useState([]);

  const addtocart = (product) =>{
    alert("Added To Cart"); 
    setCartItems((prevCart) => {2
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        console.log("Added To Cart");
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    })
  };


  return (
    <>
    <Header></Header>
    <Home addtocart={addtocart}></Home>
    </>
  );
}

export default App;
