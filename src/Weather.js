import React from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

import "./App.css";

export default function Weather(props) {
  function getTemp(response) {
    //alert(
    //`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`
    // );
  }

  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);

  return (
    <div className="Weather">
      <h2>This is my Weather Comp</h2>
      <a
        href="https://valagala.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        VALAGALA
      </a>
      <br />
      <br />
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="lightblue"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass="threeCircles"
      />
    </div>
  );
}
