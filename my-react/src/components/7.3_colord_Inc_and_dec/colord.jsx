import React from "react";

export class Colored extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, num: 0, color: "" };

    this.HandleChange = this.HandleChange.bind(this);
  }
  Inc() {

    this.setState((prevState) => {
      let newNum = prevState.num + 1;
      let newColor = "";
      if (newNum > 0) {
        newColor = "green";
      }
      if (newNum < 0) {
        newColor = "red";
      }
      return {
        color: newColor,
        num: newNum,
      };

    });
  }
  
  Dec() {
    if (this.state.num < 0) {
      console.log(this.state.num);
      this.setState((prevState) => {
        return { color: (prevState.color = "red") };
      });
    } else {
      this.setState((prevState) => {
        {
          color: prevState.color = "";
        }
      });
    }
    this.setState((prevState) => {
      return { num: prevState.num - 1 };
    });
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
          onChange={(e) => this.HandleChange(e)}
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
