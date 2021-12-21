import React from "react";
import { store } from "../data/data";

export const ProductDetail = (props) => {
  const productId = props.match.params.id;
  const matchProduct = store.find((product) => {
    return `${product.id}` === productId;
  });
  const ShowProduct = () => {
    return (
      <div className="card">
        <div>{matchProduct.title}</div>
        <div>{matchProduct.price}</div>
        <div>{matchProduct.imageUrl}</div>
        <div>{matchProduct.size}</div>
      </div>
    );
  };
  return <div>{ShowProduct()}</div>;
};
