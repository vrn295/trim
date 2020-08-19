import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 className="logo">Trim</h1>
        <ul className="nav-ul">
          <Link to="/">
            <li className="nav-list">
              <a id="home" className="nav-index" href="# ">
                Home
              </a>
            </li>
          </Link>
          <Link to="/services">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                services
              </a>
            </li>
          </Link>
          <Link to="gallery">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                gallery
              </a>
            </li>
          </Link>
          <Link to="about">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                about
              </a>
            </li>
          </Link>
          <Link to="contact">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                contact
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
