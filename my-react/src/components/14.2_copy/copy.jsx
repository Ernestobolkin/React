import React from "react";

export class Copy extends React.Component {
  state = {
    value: "",
  };
  myRef = React.createRef();

  Copy = () => {
    navigator.clipboard.writeText(this.state.value);
    this.setState({ value: "" });
  };

  componentDidMount(){
    this.myRef.current.focus(); 
  }

  Change = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <textarea
          ref={this.myRef}
          cols="30"
          rows="10"
          value={this.state.value}
          onChange={(e) => this.Change(e)}
        ></textarea>{" "}
        <br />
        <button onClick={this.Copy}>Copy</button>
      </div>
    );
  }
}
