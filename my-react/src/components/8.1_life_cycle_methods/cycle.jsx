import React from "react";

export class Favorit extends React.Component {
  state = { favoriteColor: "black" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "red" });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector(
      "#test"
    ).innerHTML = `<h1 style=color:${this.state.favoriteColor}> test ${this.state.favoriteColor}</h1>`;
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>
          {" "}
          My favorit Color is {this.state.favoriteColor}
        </h1>
        <div id="test"></div>
      </div>
    );
  }
}
