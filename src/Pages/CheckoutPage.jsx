import React from 'react'
import {Checkout} from '../MyComponent/Checkout'

export const CheckoutPage = ({cartItems}) => {
  return (
    <div>
        <Checkout cartItems= {cartItems} ></Checkout>
    </div>
  )
}
