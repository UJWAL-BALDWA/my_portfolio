import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState} from 'react';
import logo from "../images/ubLogo.png";

import { Link } from "react-router-dom"

const Navbar = () => {

    const [click , setClick] = useState(false);
    const handelClick = () => setClick(!click);
  
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >= 10){
        setColor(true);
      } 
      else{
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
 
  return (
    <div className="Nav-Header">
      <div className={color ? "Header Header-bg" : "Header"}>
        <Link to="/">
          <img src={logo}/>
          
        </Link>
        <ul className={click ? "Navbar active" : "Navbar"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Education">Education</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handelClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;