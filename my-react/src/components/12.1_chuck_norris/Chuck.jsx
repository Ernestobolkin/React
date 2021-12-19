import React from "react";
import axios from "axios";
import "./style.css";

export class Chuck extends React.Component {
  state = {
    img: "",
    jokeValue: "",
    categoris: [],
    card2Img: "",
    card2JokeValue: "",
  };
  chuckFunc = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        this.setState({
          img: response.data.icon_url,
          jokeValue: response.data.value,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  chuckCategoris = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categoris: response.data });
  };
  btnClick = async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({
      card2Img: response.data.icon_url,
      card2JokeValue: response.data.value,
    });
    console.log(response.data);
  };
  render() {
    return (
      <div>
        <div className="card1">
          <div
            className="img"
            style={{
              background: `url("${this.state.img}") no-repeat center center/cover`,
            }}
          ></div>
          <div className="joke">{this.state.jokeValue}</div>
          <button className="btn" onClick={this.chuckFunc}>
            Get joke
          </button>
        </div>
        <div className="card2">
          <button onClick={this.chuckCategoris}>Get Category</button>
          <div className="categoris">
            {this.state.categoris.map((categoris, i) => {
              return (
                <button
                  onClick={() => {
                    this.btnClick(categoris);
                  }}
                >
                  {categoris}
                </button>
              );
            })}
          </div>
          <div className="categoryCard">
            <div className="cartCategoris2">
              <div
                className="img"
                style={{
                  background: `url("${this.state.card2Img}") no-repeat center center/cover`,
                }}
              ></div>
              <div className="joke">{this.state.card2JokeValue}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
