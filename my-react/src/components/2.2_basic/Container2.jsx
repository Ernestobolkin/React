import React from "react";

export const Container2 = () => {
  // 1
  const data = ["Hello", "World"];
  // 2
  const number1 = 5;
  const number2 = 6;
  // 3
  const string = "I Love React!!";
  return (
    <div>
      {data[0]+" "+data[1]} <br />
      {number1} <br />
      {number2} <br />
      {number1+number2}<br />
      {string.length}
    </div>
  );
};
