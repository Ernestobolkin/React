import React from "react";
import { MoackApi } from "../api/api";

export class CreateNewItem extends React.Component {
  
  static renderNewItem = () => {
    return(
      <div>
        <input type="text" placeholder="img url" />
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </div>
    )
  };
  

  

  render() {
    return <div></div>;
  }
}
