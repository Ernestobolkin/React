import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export class NavBar extends React.Component {
  render = () => {
    return (
      <div className="ui tabular menu">
        <div className="item active">
          <Link to="/">Home Page</Link>
        </div>
        <div className="item">
          <Link to="/users">Users Page</Link>
        </div>
      </div>
    );
  };
}
