import React from "react";

import "./App.css";
import "./Weather.css";

export default function CurrentWeather() {
  let weatherData = {
    city: "Valville",
    date: " Now",
    description: "Not a cloud in sight!",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    currentTemp: 22,
    humidity: 1,
    wind: 1,
  };

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-10">
          <h1 className="city">{weatherData.city}</h1>
          <ul className="sub-text">
            <li>
              Last updated:
              <span>{weatherData.date}</span>
            </li>
            <em>
              <li>{weatherData.description}</li>
            </em>
          </ul>
        </div>
        <div className="col-2">
          <button className="btn location-btn">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left main-icon"
            />
            <div className="float-left main-temp">
              <strong>{weatherData.currentTemp}</strong>
              <em>
                <span className="units">°F </span>
              </em>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <div className="hum-wind">
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span> mph
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

//Just keeping in case-- for easy use
/*function getTemp(response) {
    //alert(
    //`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`
    // );
  }

  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);*/
