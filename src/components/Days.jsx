import React from "react";
import "./Search.css";
import fog from "./images/fog.png"

export const Days = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return (
    <div className="days">
      {days.map((e, i) => (
        <div key={i} className="day">
          <h3>{e}</h3>
          <h5>temp°C</h5>
          <img src={fog} alt="" />
          <p>Weather</p>
        </div>
      ))}
    </div>
  );
};
