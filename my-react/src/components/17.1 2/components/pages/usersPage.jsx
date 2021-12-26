import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { MoackApi } from "../api/api";

export class UsersPage extends React.Component {
  state = {
    data: [],
  };

  getData = async () => {
    const data = await MoackApi.getUsersData();
    this.setState({ data: data.data });
  };

  removeItem = async (id) => {
    await MoackApi.deleteItem(id);
    this.getData();
  };

  addItems = async () => {
    // CreateNewItem.
  };

  renderUsers = () => {
    return this.state.data.map((user) => {
      return (
        <div
          style={{ margin: "1rem 0" }}
          className="four wide column ui card"
          key={user.id}
        >
          <div className="image" href="#">
            <img src={`${user.img}`} />
          </div>
          <div className="content">
            <div className="header" href="#">
              {user.name} {user.lastName}
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <button
                onClick={() => this.removeItem(user.id)}
                className="ui basic red button"
              >
                Delete
              </button>
              <button className="ui basic green button">Edit</button>
            </div>
          </div>
        </div>
      );
    });
  };

  componentDidMount() {
    this.getData();
  }



  render() {
    return (
      <div>
        <button onClick={(e)=>this.addItems(e)}>Add Item</button>
        {}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" /> <button>Search</button>
          <br />
        </div>
        <br />
        <div className="ui cards">{this.renderUsers()}</div>
      </div>
    );
  }
}
