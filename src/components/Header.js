import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <Link to="/women" className="logo-text">African Marketplace</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/women" className="nav-link">Women</Link>
            </li>
            <li>
              <Link to="/men" className="nav-link">Men</Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 