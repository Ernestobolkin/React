import React from "react";
import "./style.css";

export class Birthday extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.birthday.map((e, i) => {
          return (
            <div className="card" key={i}>
              {e.name}
              <br />
              {e.birthday}
              <br />
              {e.favoriteFoods.meats.map((food) => {
                return <p>meats: <br /> {food}</p>;
              })}
              {e.favoriteFoods.fish.map((food) => {
                return <p> fish: <br /> {food}</p>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
// e.birthday
