import React from "react";
import HomePageApp from "./components/16.1_products/homePageApp";

const App = () => {
  return (
    <div>
      <HomePageApp/>
    {/* <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/Products" exact component={Products} />
      <Route path="/Products/:id/:title" exact component={ProductDetail} />
    </BrowserRouter> */}
    </div>
  );
};

export default App;
