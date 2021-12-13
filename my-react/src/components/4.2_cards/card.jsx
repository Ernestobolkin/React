import React from "react";
import { Buttons } from "../4.1_buttons/btn1";

export const Card=(props)=>{
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "lightpink",
          padding: "10px",
          marginRight: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "150px",
            height: "100px",
          }}
        ></div>

        <div>{props.title}</div>
        <div>{props.text}</div>
        <div style={{display: "flex"}}>
          <Buttons text="SHARE"/>
          <Buttons text="EXPLORE"/>
        </div>
      </div>
    </div>
  );
};

