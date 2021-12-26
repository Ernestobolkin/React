import React, { useState } from "react";

export const WhatTheTime = () => {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "seconds":
        setSec(value);
        setMin(value / 60);
        setHour(value / 3600);
        break;
      case "minutes":
        setSec(60 * value);
        setMin(value);
        setHour(value / 60);
        break;
      case "hours":
        setSec(3600 * value);
        setMin(60 / value);
        setHour(value);
        break;
      default:
        break;
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
