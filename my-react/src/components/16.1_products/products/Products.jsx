import React from "react";
import { store } from "../data/data";
import { Link } from "react-router-dom";
import "./style.scss"

export class Products extends React.Component {
  state = {
    store: null,
  };

  componentDidMount() {
    this.setState({
      store,
    });
  }
  generateProducts = () => {
    return this.state.store.map((Product) => {
      return (
        <Link className="productItem" to={`/Products/${Product.id}/${Product.title}`} key={Product.id}>
          {Product.title}
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="productsContainer">
        {this.state.store && this.generateProducts()}
      </div>
    );
  }
}
