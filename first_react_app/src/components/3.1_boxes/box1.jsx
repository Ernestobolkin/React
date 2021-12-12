import React from "react";
import { Box2 } from "./box2";

export const Box1 = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
      }}
    >
      <Box2 />
    </div>
  );
};
