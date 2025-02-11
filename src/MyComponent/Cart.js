import React from 'react'

export const Cart = ({cartItems,updateCart}) => {

  const handleRemove = (id) =>{
      updateCart(
        cartItems.filter((item) => item.id !== id)
      )
  }

  const handleQuantity = (id,value) => {
    updateCart(
      cartItems.map((item) =>
          item.id === id ?{ ...item, quantity: item.quantity+value }: item
      )
    );
  }
  
  return (
    <div>
    {cartItems.map((item)=> (
      <div key={item.id} style={{backgroundColor: "yellow", marginLeft: "5px",border: "2px solid black",display: "inline-flex",width: "500px"}}>
        <div>
          <img src={item.image} style={{width: "200px",height: "200px",}}></img>
        </div>
        <div>
        <h2 >{item.name}</h2>
        <p style={{display: "flex"}}>{item.desc}</p>
        <h3>{item.price}</h3>
        <div style={{display: "inline-flex", gap: "3px"}}>
        <button onClick={() => handleQuantity(item.id,-1)} disabled={item.quantity === 1}>-</button>
        <h4>{item.quantity}</h4>
        <button onClick={() =>handleQuantity(item.id,+1)}>+</button>
        <button>Buy</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
        </div>
      </div>
    ))}
    </div>
  )
}
