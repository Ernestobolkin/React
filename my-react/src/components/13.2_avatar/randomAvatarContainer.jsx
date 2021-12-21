import axios from "axios";
import React from "react";
import "./style.css";

export class Avatar extends React.Component {
  state = {
    info: [],
    value: "",
  };

  GetData = async () => {
    await axios
      .get("https://randomuser.me/api/", {
        params: { results: 10 },
      })
      .then((response) => {
        this.setState({ info: response.data.results });
      });
  };

  Avatar = () => {
    // console.log(this.state.info);
    this.state.info.map((person) => {
      return (
        <div className="card">
          <div className="name">
            {person.name.first} {person.name.last}
          </div>
          <div
            className="img"
            style={{
              background: `url(${person.picture.large}) no-repeat center center/cover`,
            }}
          ></div>
        </div>
      );
    });
  };

  componentDidMount() {
    this.GetData();
    this.Avatar()
  }

  searchNfilter = () => {
    return this.state.info.filter((user) => {
      const fullName = (user.name.first + " " + user.name.last).toLowerCase();
      if (this.state.value === "") {
        return user;
      } else if (fullName.indexOf(this.state.value.toLowerCase()) > -1) {
        return user;
      }
      return null;
    });
  };

  onChangeFunc = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <input
          className="input"
          type="text"
          onChange={(event) => {
            this.onChangeFunc(event);
          }}
        />
        {this.Avatar()}
      </div>
    );
  }
}
