import React from "react";

export class CheckBox extends React.Component {
  render() {
    const { id, text, checked ,callback } = this.props;
    return (
      <div>
        <input
          onChange={(e)=>callback(e)}
          defaultChecked={checked}
          type="checkbox"
          id={id}
        />
        <span>{text}</span> <br />
      </div>
    );
  }
}
