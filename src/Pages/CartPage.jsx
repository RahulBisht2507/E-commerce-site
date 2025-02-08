import react from "react";
import { Cart } from "../MyComponent/Cart.js";

const CartPage = ({cartItem,updateCart}) => {

    return(
        <>
        <div>CartPage</div>
        <Cart cartItem = {cartItem}  updateCart = {updateCart}></Cart>
        </>
    )
};

export default CartPage;