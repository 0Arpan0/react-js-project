import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/home">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/login">
          <li>LOGIN</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
