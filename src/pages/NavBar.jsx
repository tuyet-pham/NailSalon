import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="landing-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;