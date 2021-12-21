import React from "react";
import { Link } from "react-router-dom";
import "./nav.style.scss"

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navBar">
        <Link className="home" to="/">Home</Link>
        <Link className="products" to="/Products">Products</Link>
        </nav>
      </div>
    );
  }
}
