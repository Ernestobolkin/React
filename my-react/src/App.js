import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./components/16.1_products/homePage/HomePage";
import { Products } from "./components/16.1_products/products/Products";
import { NavBar } from "./components/16.1_products/header/NavBar";
import { ProductDetail } from "./components/16.1_products/products/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/Products" exact component={Products} />
      <Route path="/Products/:id/:title" exact component={ProductDetail} />
    </BrowserRouter>
  );
};

export default App;
