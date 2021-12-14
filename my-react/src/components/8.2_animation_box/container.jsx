import React from "react";
import { Box } from "./box";

export const Container = ({ position, color }) => {
  return (
    <div>
      <Box
        test={{ transform: `translateX(${position})`, transition: "1s ease" }}
        size={"100px"}
        color={color}
      />
      <Box
        test={{ transform: `translateX(${position})`, transition: "2s ease" }}
        size={"200px"}
        color={color}
      />
      <Box
        test={{ transform: `translateX(${position})`, transition: "1.5s ease" }}
        size={"50px"}
        color={color}
      />
    </div>
  );
};
