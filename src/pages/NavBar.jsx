import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav-main">
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
        {/* <li>
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
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;