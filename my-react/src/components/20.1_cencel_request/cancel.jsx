import React, { useState, useEffect } from "react";
import axios from "axios";

export const Cancel = () => {
  const [isFetch, setIsFecth] = useState(false);
  const Data = () => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
      // const cancelToken = axios.CancelToken;
      const source = axios.CancelToken.source();
      const getData = async () => {
        const data = await axios
          .get("https://api.chucknorris.io/jokes/random", {
            cancelToken: source.token,
          })
          .catch((err) => {
            console.log(err);
          });
        setJoke(data);
      };
      getData();

      return () => {
        source.cancel();
      };
    }, []);
    return <div>{joke.value}</div>;
  };

  return (
    <div>
      <button onClick={() => setIsFecth(!isFetch)}>
        {!isFetch ? "Fetch" : "Enable"}
      </button>
      {isFetch && <Data />}
    </div>
  );
};
