import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./homePage/HomePage";
import { Products } from "./products/Products";
import { NavBar } from "./header/NavBar";
import { ProductDetail } from "./products/ProductDetail";

const HomePageApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/Products" exact component={Products} />
      <Route path="/Products/:id/:title" exact component={ProductDetail} />
    </BrowserRouter>
  );
};

export default HomePageApp;
