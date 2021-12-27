import React, { useState, useEffect } from "react";
import axios from "axios";

export const Fetch = () => {
  const [test, setTest] = useState([]);

  const GetData = async () => {
    const { data } = await axios.get("https://swapi.dev/api/films/1/");
    setTest(data);
    console.log(test);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <p>Star Wars</p>
      <p>The Director: {test.director}</p>
      <p>The title: {test.title}</p>
    </div>
  );
};
