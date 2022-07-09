import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './components.css';
import './pages.css';


function NavBar() {
  return (
    <div className="NS-nav-bar">
        <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
        </nav>
    </div>
    
  );
}

export default NavBar;