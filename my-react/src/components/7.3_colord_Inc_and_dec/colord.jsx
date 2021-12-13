import React from "react";

export class Colored extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, color: "" };
  }
  Inc() {
    console.log(this.state.num);
    if (this.state.num > 0) {
      this.setState({ color: (this.state.color = "green") });
    } else {
      this.setState({ color: (this.state.color = "") });
    }
    this.setState({ num: this.state.num + 1 });
  }
  Dec() {
    if (this.state.num < 0) {
      this.setState({ color: (this.state.color = "red") });
    } else {
      this.setState({ color: (this.state.color = "") });
    }
    this.setState({ num: this.state.num - 1 });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        {/* <input type="text" /> */}
        <button onClick={this.Inc.bind(this)} style={{ marginRight: "10px" }}>
          increment
        </button>
        <button onClick={this.Dec.bind(this)} style={{ marginRight: "10px" }}>
          decrement
        </button>
        <label htmlFor="btn" style={{ backgroundColor: `${this.state.color}` }}>
          {this.state.num}
        </label>
      </div>
    );
  }
}
