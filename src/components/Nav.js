import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons-assets/Logo.svg";
import "../index.css";
const Nav = () => {
  return (
    <div className="navbars">
      <nav className="nav_logo ">
        <img src={Logo} alt="Logo" />
      </nav>
      <nav className="nav_links ">
        <ul>
          <li>
            <Link to="/" className="link">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <h1>About</h1>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="link">
              <h1>Menu</h1>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <h1>Reservations</h1>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <h1>Order Online</h1>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <h1>Login</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
