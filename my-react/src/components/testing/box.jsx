import React from "react";

export const ChangeBox =({radius,color})=>{
  return(
    <div>
      <div style={{
        width:"100px",
        height:"100px",
        borderRadius:radius,
        backgroundColor:color
      }}></div>
    </div>
  )
}