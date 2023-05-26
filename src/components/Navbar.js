import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import './navStyle.css';

const Navbar = () => {
  return (
    <div className="navbar">

     <div className="navbar-brand">
       <h1 style={{color:'white'}}>ECOMM</h1>
     </div>
    <div className="navbar-nav">

    <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </ul>
  </nav>
    </div>
    
    </div>
     
   
    
  );
};

export default Navbar;