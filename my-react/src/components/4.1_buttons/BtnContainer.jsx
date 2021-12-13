import React from "react";
import { Buttons } from "./btn1";

export const BtnContainer = ()=>{
return(
  <div style={{display:"flex"}}>
    <Buttons font="bold" text="Important" />
    <Buttons text="Not Importan"/>
  </div>
)
}