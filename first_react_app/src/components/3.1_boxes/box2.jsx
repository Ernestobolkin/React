import React from "react";
import { Box3 } from "./box3";

export const Box2 = () => {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
        }}
      >
        <Box3 />
      </div>
    </div>
  );
};
