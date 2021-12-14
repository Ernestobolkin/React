import React from "react";
import { Spinner } from "./spinner";
import "./spinners.style.css";

export class SpinnerContainer extends React.Component {
  state = { display: "" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({display:"none"})
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <Spinner display={this.state.display} />
      </div>
    );
  }
}
