import React from "react";

export class Buttons2 extends React.Component {
  render() {
    const {font,text} =this.props;
    return (
      <div>
        <button style={{ fontWeight:font }}>{text}</button>
      </div>
    );
  }
}