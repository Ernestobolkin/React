import React, { useState, useEffect } from "react";
import axios from "axios";

export const Country = () => {
  const [data, setData] = useState([]);
  const [filtererdData, setFiltererdData] = useState([]);
  const [value, setValue] = useState("");

  
  const getData = async () => {
    const response = await axios.get("http://api.countrylayer.com/v2/all", {
      params: {
        access_key: "33d30f9e454edd2fe87c4d298887a62c",
      },
    });
    setData(response.data);
    setFiltererdData(response.data);
  };

  const RenderData = () => {
    return filtererdData.map((country) => {
      return (
        <li key={country.name} id={country.name}>
          <p>{country.name}</p>
        </li>
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const search = () => {
    const filterdArr = data.filter((country) => {
      return country.name.toLowerCase().includes(value);
    });
    setFiltererdData(filterdArr.length ? filterdArr : data);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    search();
  };

  return (
    <div>
      <input
        type="text"
        value={value.toLowerCase()}
        onChange={(e) => onChangeHandler(e)}
      />
      <ul>{RenderData()}</ul>
    </div>
  );
};
