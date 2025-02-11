import React from 'react'

export const Checkout = ({cartItems}) => {

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
   <div style={{background: "#EDE8F5",display: 'inline-flex'}}>
     <div style={{background: "lightblue",width: "750px",height: "690px",margin: '20px'}} >
        <h1 className = 'text-center'>Checkout</h1>
        <h4 style={{marginLeft:"90px"}}>Contact Information</h4>
        <h6 style={{marginLeft:"90px"}}>E-mail</h6>
        <input type="email" placeholder='e-mail' style={{display:'block', width: "500px",marginLeft:"90px"}} />

        <h4 style={{marginLeft:"90px",marginTop: "50px"}} >Shipping Adress</h4>
        <h6 style={{marginLeft:"90px"}}>Country/Region</h6>
        <input list='country' name='country' placeholder='Country' style={{display:'block', width: "500px",marginLeft:"90px"}}/>
        <datalist id="country">
            <option value="india">India</option>
            <option value = 'bhutan'>Bhutan</option>
            <option value="nepal">Nepal</option>
            <option value = 'usa'>USA</option>
            <option value="uae">UAE</option>
            <option value = 'canada'>Canada</option>
        </datalist>


        <input type='name' placeholder='First Name' style={{marginLeft: "90px",marginTop: "10px"}}/>
        <input type='name' placeholder='Last Name' style={{marginLeft: "50px"}}/>
        <h6 style={{marginLeft: "90px",marginTop: '10px'}}>Adress</h6>
        <textarea name='adress' placeholder='Adress' style={{display:'block',marginTop: "5px",marginLeft: "90px"}}/>
        <h3 style={{marginLeft: '300px'}}>Total:${total}</h3>
        <button type = 'submit' style={{marginLeft: '300px'}}>Place Order</button>

    </div>

    <div style={{display: 'block',paddingLeft: '111px',paddingRight: "111px"}}>
    {cartItems.map((item)=> (
      <div key={item.id} style={{backgroundColor: "yellow", marginLeft: "5px",border: "2px solid black",display: "inline-flex",width: "500px",}}>
        <div>
          <img src={item.image} style={{width: "200px",height: "200px",}}></img>
        </div>
        <div>
        <h2 >{item.name}</h2>
        <p style={{display: "flex"}}>{item.desc}</p>
        <h3>{item.price}</h3>
        <div style={{display: "inline-flex", gap: "3px"}}>
        <button>-</button>
        <h4>{item.quantity}</h4>
        <button >+</button>
        <button>Buy</button>
        <button>Remove</button>
        </div>
        </div>
      </div>
    ))}
    </div>

   </div>
  )
}
