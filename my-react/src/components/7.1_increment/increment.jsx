import React from "react";

export class Input_OutPut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0};
  }
  Inc(){
    this.setState({num:this.state.num+1})
  }
  Dec(){
    this.setState({num:this.state.num-1})
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        {/* <input type="text" /> */}
        <button onClick={this.Inc.bind(this)} id="btn" style={{ marginRight: "10px" }}>
          increment
        </button>
        <button onClick={this.Dec.bind(this)} id="btn" style={{ marginRight: "10px" }}>
          decrement
        </button>
        <label htmlFor="btn">{this.state.num}</label>
      </div>
    );
  }
}
