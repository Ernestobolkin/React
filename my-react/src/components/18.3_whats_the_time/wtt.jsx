import React, { useState } from "react";

export const WhatTheTime = () => {
  const [sec, setSec] = useState(null);

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "seconds":
        setSec(value);
        break;
      case "minutes":
        setSec(60 * value);
        break;
      case "hours":
        setSec(value * 3600);
        break;
      default:
      console.log("err");
    }
  };

  return (
    <div>
      <div className="container">
        <label>Seconds</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="seconds"
          value={sec}
        />{" "}
        <br />
        <label>minutes</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="minutes"
          value={sec/60}
        />
        <br />
        <label>hours</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="hours"
          value={sec/3600}
        />
      </div>
    </div>
  );
};
