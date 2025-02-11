import React from 'react'
import cartLogo from './ProductImages/shopping-cart.png'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">E-Commerce-Site</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/checkout">Checkout <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <Link to="/cart"><img src={cartLogo} alt='cartLogo' style={{width: '40px', height: '40px',marginRight: "20px"}}></img></Link>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<Outlet />
</>
  )
}
