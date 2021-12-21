import React from "react";
import { store } from "../data/data";
import { Link } from "react-router-dom";

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
        <Link className="product" to={`/Products/${Product.id}/${Product.title}`} key={Product.id}>
          {Product.title}
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="products">
        {this.state.store && this.generateProducts()}
      </div>
    );
  }
}
