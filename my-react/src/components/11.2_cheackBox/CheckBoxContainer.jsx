import React from "react";
import { CheckBox } from "./CheckBox";

const content = [
  {
    id: 0,
    text: "I read the term of the app",
    checked:false,
  },
  {
    id: 1,
    text: "I accept the term of the app",
    checked:false,
  },
  {
    id: 2,
    text: "I want to get the weekly new letter",
    checked:true,
  },
  {
    id: 3,
    text: "I want to get sales and offers",
    checked:true,
  },
];

export class CheckContiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  ChangeDef=()=>{
    console.log("works");
  }
  render() {
    return (
      <div>
        {content.map((box) => {
          return (
            <CheckBox
              callback={this.ChangeDef}
              checked={box.checked}
              key={box.id}
              id={box.id}
              text={box.text}
            />
          );
        })}
      </div>
    );
  }
}
