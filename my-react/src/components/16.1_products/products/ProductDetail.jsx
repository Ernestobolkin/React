import React from "react";
import { store } from "../data/data";
import "./style.scss";

export const ProductDetail = (props) => {
  const productId = +props.match.params.id;
  const matchProduct = store.find((product) => {
    return product.id === productId;
  });
  const ShowProduct = () => {
    console.log(matchProduct.imageUrl);
    return (
      <div className="container">
        <div className="card">
          <div className="title">{matchProduct.title}</div>
          <div className="imgContainer">
            <div
              className="img"
              style={{
                backgroundImage: "url(" + matchProduct.imageUrl + ")",
              }}
            ></div>
          </div>
          <div className="price">Price: {matchProduct.price}</div>
          <div className="size">Size: {matchProduct.size}</div>
        </div>
      </div>
    );
  };
  return <div>{ShowProduct()}</div>;
};
