import React from "react";
import "./spinners.style.css"

export const Spinner = ({display})=>{
  return(
    <div>
      <div className="circle" style={{
        display:display
      }}></div>
    </div>
  )
}