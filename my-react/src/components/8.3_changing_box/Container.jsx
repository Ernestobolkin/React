import React from "react";
import { ChangeBox } from "./box";

let num = 0;
export class ContainerCircleBox extends React.Component {
  state = { radius: "", color: "" };

  componentDidMount() {
    setInterval(() => {
      let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ color: color2 });
      num++;
      this.testing();
    }, 1000);
  }
  testing() {
    if (num % 5 === 0) {
      this.setState({ radius: "50px" });
      num = 0;
    } else {
      this.setState({ radius: "" });
    }
  }

  render() {
    return (
      <div>
        <ChangeBox radius={this.state.radius} color={this.state.color} />
      </div>
    );
  }
}
