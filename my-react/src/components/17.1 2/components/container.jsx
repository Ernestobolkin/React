import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home";
import { UsersPage } from "./pages/usersPage";
import { NavBar } from "./navBar/navBar";
// import { MoackApi } from "./api/api";

export class Container extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UsersPage} />
        </BrowserRouter>
      </div>
    );
  }
}
