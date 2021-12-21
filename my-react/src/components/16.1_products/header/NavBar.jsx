import React from "react";
import { Link } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
        <Link className="home" to="/">Home</Link>
        <Link className="products" to="/Products">Products</Link>
        </nav>
      </div>
    );
  }
}
