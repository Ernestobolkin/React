import React from "react";
import { data } from "./data";
import { Names } from "./names";
import { Birthday } from "./birthday";

const info = data;
export class DataContainer extends React.Component {
  state = {
    names: [],
    birthday: [],
  };
  showData = async () => {
    await this.setState({
      names: info.map((element) => {
        return element.name;
      }),
      birthday: info.filter((element) => {
        return +element.birthday.slice(-4) >= 1990;
      }),
    });
    console.log(this.state.birthday);
  };

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.showData();
          }}
        >
          click
        </button>
        <Names names={this.state.names} />
        <Birthday birthday={this.state.birthday} />
      </div>
    );
  }
}
