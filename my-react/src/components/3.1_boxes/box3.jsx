import React from "react";
import { Box4 } from "./box4";

export const Box3 = () => {
  return (
    <div
      style={{
        width: "150px",
        height: "100px",
        background: "purple",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
};
