import React, { useCallback, useEffect, useState } from "react";
import "./Search.css";
import { FaSearchLocation } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
// import { Days } from "../Days";
// import { Temperature } from "./Temperature";
// import { Result } from "./Result";
import "../App.css";
import fog from "./images/fog.png";
import { Days } from "./Days";

export const Search = ({ placeholder }) => {
  const [data, setData] = useState([]);
  //   const search = data.main;
  //   const city = data.name;
  //   const temp = data.main.temp;
  //   const pressure = data.main.pressure;
  //   const humidity = data.main.humidity;
  //   console.log("data : ", data);
  //   console.log("search : ", search);
  //   console.log(city, temp, pressure, humidity);
  //   console.log(data.sys.sunrise, data.sys.sunset)

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=delhi,IN&appid=3808758cdf1eaeda6dbed96649ab609e&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const debounce = (func) => {
    let time;
    return function (...args) {
      const context = this;

      if (time) clearTimeout(time);
      time = setTimeout(() => {
        time = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const handleSearch = (e) => {
    const { value } = e.target;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value},IN&appid=3808758cdf1eaeda6dbed96649ab609e&units=metric`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const optimised = useCallback(debounce(handleSearch), []);

  return (
    <div>
      <div className="search">
        <div className="locationIcon">
          <MdLocationOn />
        </div>
        <input type="text" placeholder={placeholder} onChange={optimised} />
        <div className="searchIcon">
          <FaSearchLocation />
        </div>
      </div>
      <Days/>
      <div>
        <div className="main">
          <div className="temp">
            temp°C <img src={fog} alt="" /> city
          </div>
          <hr/>
          <div className="other">
            <div className="data">Humidity</div>
            <div className="data">Pressure</div>
            <div className="data">Sunrise</div>
            <div className="data">Sunset</div>
          </div>
        </div>
        {/* <Others humidity={humidity} pressure={pressure}/> */}
      </div>
      {/* <Result search={search}></Result> */}
      {/* <Days/> */}
      {/* <Temperature search={search} city={city}/> */}
    </div>
  );
};
