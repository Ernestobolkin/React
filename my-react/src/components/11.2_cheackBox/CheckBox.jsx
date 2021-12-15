import React from "react";

export class CheckBox extends React.Component {
  render() {
    const { id, text, checked } = this.props;
    return (
      <div>
        <input
          defaultChecked={checked}
          type="checkbox"
          id={id}
        />
        <span>{text}</span> <br />
      </div>
    );
  }
}
