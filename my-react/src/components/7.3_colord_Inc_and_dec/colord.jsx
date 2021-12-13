import React from "react";

export class Colored extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, num: 0, color: "" };

    this.HandleChange = this.HandleChange.bind(this);
  }
  Inc() {
    if (this.state.num > 0) {
      this.setState({ color: (this.state.color = "green") });
    } else {
      this.setState({ color: (this.state.color = "") });
    }
    this.setState({ num: this.state.num + this.state.value });
  }
  Dec() {
    if (this.state.num < 0) {
      this.setState({ color: (this.state.color = "red") });
    } else {
      this.setState({ color: (this.state.color = "") });
    }
    this.setState({ num: this.state.num - this.state.value });
  }
  HandleChange(e) {
    console.log(e);
    this.setState({ value: +e.target.value });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={this.state.value}
          onChange={(e)=>this.HandleChange(e)}
        />
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
