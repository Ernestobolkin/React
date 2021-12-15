import React from "react";
import { Button } from "./btn";

const colors = [
  { id: 0, color: "blue" },
  { id: 1, color: "red" },
  { id: 2, color: "yellow" },
];

export class FatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      selectedColor: "",
    };
  }

  updateColor = (color) => {
    this.setState({ selectedColor: color });
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>
          The color selected is{" "}
          <span
            style={{
              color: this.state.selectedColor,
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            {" "}
            {this.state.selectedColor}
          </span>
        </h1>
        {colors.map((btn) => {
          return (
            <Button callback={this.updateColor} color={btn.color} id={btn.id} />
          );
        })}
      </div>
    );
  }
}
