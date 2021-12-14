import React from "react";
import { ChangeBox } from "./box";

export class ContainerCircleBox extends React.Component {
  state = { radius: "" ,color:"green"};
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 1000);
    setTimeout(() => {
      this.setState({ color: "blue" });
    }, 2000);
    setTimeout(() => {
      this.setState({ color: "black" });
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ radius: "50px" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <ChangeBox radius={this.state.radius} color={this.state.color} />
      </div>
    );
  }
}
