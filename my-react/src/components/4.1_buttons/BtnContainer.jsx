import React from "react";
import { Buttons2 } from "../6.1_class_components/Refactor";

export const BtnContainer = ()=>{
return(
  <div style={{display:"flex"}}>
    <Buttons2 font="bold" text="Important" />
    <Buttons2 text="Not Importan"/>
  </div>
)
}