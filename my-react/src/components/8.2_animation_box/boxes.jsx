import React from "react";
import { Container } from "./container";

let randomColor = "red";
let randomColor2 = "green";
let randomColor3 = "blue";
export class Boxes extends React.Component {
  state = { 
    position: "-500px",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ position: "0" });
    }, 1000);
  }
  componentDidUpdate() {
    if (this.state.position === "0") {
      setTimeout(() => {
        this.setState({ position: "-500px" });
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      }, 4000);
    } else {
      setTimeout(() => {
        this.setState({ position: "0" });

      }, 1000);
    }
  }
  render() {
    return (
      <div>
        <Container position={this.state.position} color={randomColor} />
        <Container position={this.state.position} color={randomColor2} />
        <Container position={this.state.position} color={randomColor3} />
      </div>
    );
  }
}
