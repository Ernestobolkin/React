import React from "react";
import { data } from "./data";

export class Names extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((e,i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    );
  }
}
