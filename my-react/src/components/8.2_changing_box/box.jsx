import React from "react";

export const Box = ({ size }) => {
  return (
    <div
      style={{
        marginBottom: "5px",
        width: size,
        height: size,
        backgroundColor: "red",
      }}
    ></div>
  );
};
