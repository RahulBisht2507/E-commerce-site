import ReactDom from "react-dom/client"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./MyComponent/Header.js";
import Home from "./Pages/Home.js";
import {About} from "./Pages/About.js"
import {CheckoutPage} from "./Pages/CheckoutPage.jsx"
import { useState } from 'react';
import CartPage from "./Pages/CartPage.jsx";

function App() {

const [cartItems, setCartItems] = useState([]);

  const addtocart = (product) =>{
    alert("Added To Cart"); 
    setCartItems((prevCart) => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Header />}>
        <Route index element = {<Home addtocart={addtocart}/>} />
        <Route path="/about" element = {<About />} />
        <Route path="/checkout" element = {<CheckoutPage cartItems= {cartItems} />} />
        <Route path="/cart" element = {<CartPage  cartItems={cartItems} updateCart={setCartItems}/>} />
        </Route>
      </Routes>
    </BrowserRouter>





    {/* <div style={{
      backgroundColor:"#EDE8F5"
    }}>
    <Header></Header>
    <Home addtocart={addtocart}></Home>
    </div> */}
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
