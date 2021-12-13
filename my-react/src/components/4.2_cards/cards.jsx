import React from "react";
import { Card } from "./card";

let r_title = [];
r_title[0] = "I was just thinking about you!";
r_title[1] = "You are a great example for others.";
r_title[2] = "You have great ideas.";
r_title[3] = "When I grow up I want to be you!";
r_title[4] = "I appreciate all of your opinions.";

let r_text = [];
r_text[0] = "earum ut molestias";
r_text[1] = "e alias error";
r_text[2] = "harum maxime adip";
r_text[3] = "olor sit amet consectetur";
r_text[4] = " adipisicing elit";

let i = Math.floor(r_title.length * Math.random());
let j = Math.floor(r_title.length * Math.random());
let k = Math.floor(r_title.length * Math.random());

export const Cards = () => {
  return (
    <div style={{display:"flex"}}>
      <Card title={r_title[i]} text={r_text[i]} img="https://picsum.photos/500/300?random=1"/>
      <Card title={r_title[j]} text={r_text[j]} img="https://picsum.photos/500/300?random=2"/>
      <Card title={r_title[k]} text={r_text[k]} img="https://picsum.photos/500/300?random=3"/>
    </div>
  );
};
