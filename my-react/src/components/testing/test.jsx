import React from "react";

export class TestingStuff extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log("My component was renderd to the screen");
  }

  componentDidUpdate(){
    console.log("my componnent was jus updated - it rerenderd");
  }
  render() {
    return <div></div>;
  }
}
