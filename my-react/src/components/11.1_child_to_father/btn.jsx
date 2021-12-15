import React from "react";

export const Button = ({callback, color, id }) => {
  return (
    <div>
      <button
        id={id}
        onClick={()=>callback(color)}
        style={{
          color: "white",
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          backgroundColor: color,
        }}
      >
        {color}
      </button>
    </div>
  );
};
