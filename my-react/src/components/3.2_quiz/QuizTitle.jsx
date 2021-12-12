import React from "react";
import { Qui1 } from "./Q1Title";
import { Qinp1 } from "./Q1Input";
import { Q2title } from "./Q2Title";
import { Q2input } from "./Q2Input";

export const TitleQ1 = () => {
  return (
    <div>
      <div
        style={{ width: "350px", height: "250px", border: "5px solid black" }}
      >
        <h2>How Do You Like Front End?</h2>
        <Qui1 />
        <Qinp1 />
        <Q2title />
        <Q2input />
      </div>
    </div>
  );
};
