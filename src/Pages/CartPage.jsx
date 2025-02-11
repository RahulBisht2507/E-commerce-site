import react from "react";
import { Cart } from "../MyComponent/Cart.js";

const CartPage = ({cartItems,updateCart}) => {

    return(
        <>
        <div>CartPage</div>
        <Cart cartItems = {cartItems}  updateCart = {updateCart}></Cart>
        </>
    )
};

export default CartPage;