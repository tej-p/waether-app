import React from "react";
import "../App.css";
import fog from "./images/fog.png";
// import { Others } from "./Others";

export const Temperature = ({ search, city }) => {

// let sunrise = data.sys.sunrise;
// console.log(sunrise)


  const temp = search.temp;

  return (
    <div>
      <div className="temp">
        {temp}°C <img src={fog} alt="" /> {city}
      </div>
      {/* <Others humidity={humidity} pressure={pressure}/> */}
    </div>
  );
};
