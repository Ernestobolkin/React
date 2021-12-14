import React from "react";

export const Box = (props) => {
  return (
    <div
      style={{
        transform:props.test.transform,
        transition:props.test.transition,
        marginBottom: "5px",
        width: props.size,
        height: props.size,
        backgroundColor: props.color,
      }}
    ></div>
  );
};
