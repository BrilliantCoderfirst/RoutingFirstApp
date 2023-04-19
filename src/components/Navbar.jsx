import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h3>Company Logo</h3>
        </div>

        <div className="tabs">
          <ul>
            <Link to="/">
              <li> Home </li>
            </Link>
            <Link to="/product">
              <li> Product </li>
            </Link>
            <Link to="/addToCard">
              <li> Add To Card </li>
            </Link>
          </ul>
        </div>

        <div className="profileName">
          <input type="text" placeholder="Search..." />
          <Button text="Search" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
