import React, { useState, useEffect } from "react";
import axios from "axios";

export const Algolia = () => {

  const [data, setData] = useState([]);
  
  const [query, setQuery] = useState("hooks");

  const [userInput, setUserInput] = useState("");

  const renderData = () => {
    return data.map((story) => {
      if (story.title !== null && story.title !== "") {
        return (
          <li key={story.created_at_i}>
            <a>{story.title}</a>
          </li>
        );
      }
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setData(response.data.hits);
    };
    getData();
  }, [query]);

  return (
    <div>
      {" "}
      <input
        type="text"
        value={userInput.toLowerCase()}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={() => {
          setQuery(userInput);
        }}
      >
        Search
      </button>
      <ul>{renderData()}</ul>
    </div>
  );
};
