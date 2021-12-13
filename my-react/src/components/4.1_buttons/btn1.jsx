import React from "react";

export const Buttons = (props) => {
  return (
    <div>
      <button style={{fontWeight:props.font}}>{props.text}</button>
    </div>
  );
};
