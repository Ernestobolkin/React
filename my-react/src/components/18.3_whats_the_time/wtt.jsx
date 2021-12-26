import React, { useState } from "react";

export const WhatTheTime = () => {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();

  const onChangeFunc = (e) => {
    switch (e.target.name) {
      case "seconds":
        setSec(e.target.value);
        break;
      case "minutes":
        setMin(e.target.value);
        break;
      case "hours":
        setHour(e.target.value);
        break;
      default:
        console.log("error");
    }
  };

  return (
    <div>
      <div className="container">
        <label htmlFor="">Seconds</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="seconds"
          value={sec}
        />{" "}
        <br />
        <label htmlFor="">minutes</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="minutes"
          value={min}
        />
        <br />
        <label htmlFor="">hours</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="hours"
          value={hour}
        />
      </div>
    </div>
  );
};
