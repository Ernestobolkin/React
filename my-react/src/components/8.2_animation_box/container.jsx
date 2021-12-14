import React from "react";
import { Box } from "./box";

export const Container = ({position}) => {
  return (
    <div>
      <div style={{
        transform:`translateX(${position})`,
        transition:"all 1s ease"
        }}>
        <Box size={"100px"} />
        <Box size={"200px"} />
        <Box size={"50px"} />
      </div>
    </div>
  );
};
