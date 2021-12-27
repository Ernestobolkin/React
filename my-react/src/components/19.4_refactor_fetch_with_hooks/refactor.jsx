import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export const Chuck2 = () => {
  const [joke, setJoke] = useState({
    img: "",
    jokeValue: "",
  });

  const [categoris, setCategory] = useState({
    allCategoris: [],
    card2Img: "",
    card2JokeValue: "",
  });

  const [onBtn, setonBtn] = useState(false);

  const chuckFunc = async () => {
    const { data } = await axios
      .get("https://api.chucknorris.io/jokes/random")
      .catch((err) => {
        console.log(err);
      });
    setJoke({ img: data.icon_url, jokeValue: data.value });
  };

  const chuckCategoris = async () => {
    const { data } = await axios
      .get("https://api.chucknorris.io/jokes/categories")
      .catch((e) => {
        console.log(e);
      });
    setCategory({ ...categoris, allCategoris: data });
  };

  const getCategory = async (category) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    setCategory({
      ...categoris,
      card2Img: data.icon_url,
      card2JokeValue: data.value,
    });
    setonBtn(true);
  };

  const renderJoke = () => {
    return (
      <>
        <div
          className="img"
          style={{
            background: `url("${joke.img}") no-repeat center center/cover`,
          }}
        ></div>
        <div className="joke">{joke.jokeValue}</div>
      </>
    );
  };

  const renderCategories = () => {
    return (
      <div className="card2">
        <div className="categoris">
          {categoris.allCategoris.map((categoris) => {
            return (
              <button key={categoris} onClick={() => getCategory(categoris)}>
                {categoris}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSecondCard = () => {
    return (
      <div style={{ marginTop: "5rem" }} className="categoryCard">
        <div className="cartCategoris2">
          <div
            className="img"
            style={{
              background: `url("${categoris.card2Img}") no-repeat center center/cover`,
            }}
          ></div>
          <div className="joke">{categoris.card2JokeValue}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!categoris.allCategoris.length) {
      chuckCategoris();
    }
  }, []);

  return (
    <div>
      <div className="card1">
        {renderJoke()}
        <button className="btn" onClick={() => chuckFunc()}>
          Get joke
        </button>
      </div>
      <h1 style={{margin:"2rem 0", textAlign:"center"}}>Categories</h1>
      {renderCategories()}
      {onBtn ? renderSecondCard() : ""}
    </div>
  );
};
