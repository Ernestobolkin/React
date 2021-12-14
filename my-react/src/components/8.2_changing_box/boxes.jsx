import React from "react";
import { Container } from "./container";

export class Boxes extends React.Component {
  state = { position: "-500px" };
  componentDidMount() {
    console.log("first");
    setTimeout(() => {
      this.setState({ position: "0" });
    }, 1000);
  }
  componentDidUpdate(){
    console.log("second");
    setTimeout(() => {
      this.setState({ position: "-500px" });
    }, 4000);
    
  }
  render() {
    return (
      <div>
        <Container position={this.state.position}/>
      </div>
    );
  }
}
