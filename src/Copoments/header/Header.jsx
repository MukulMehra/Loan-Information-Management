import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import {Link} from "react-router-dom";
 const Header = () => {
    return (
        <div>
     <div className="sticky">
    <Navbar bg="white" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
    <div className="topnav navbar_items">
  <a  href="#home">Home</a>
  <Link to="/application">Repayment Track</Link>
  <Link to="/BasicsPayment">Gallery </Link>
  <Link to="/Contact">About Us</Link>
  <a href="#about">Blog</a>
  <button className="btn btn1 shadow_btn" type="submit">Login</button>
  
</div>
    </Nav> 
  </Navbar>
  </div>
        </div>
    )
}
export default Header;
