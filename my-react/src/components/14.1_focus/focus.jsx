import React from "react";

export class Focus extends React.Component {
  myInput = React.createRef();

  componentDidMount() {
    this.myInput.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.myInput} type="text" /> <br />
        {/* <input autoFocus type="text" /> */}
      </div>
    );
  }
}
