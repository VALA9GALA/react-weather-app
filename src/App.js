import React from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Forecast from "./Forecast";
import { ThreeCircles } from "react-loader-spinner";

import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <h2>Intro Edition</h2>
      </header>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <CurrentWeather />
            <Forecast />
          </div>
          <div className="coded-by text-end me-5 pe-5">
            <small>
              Coded by
              <a
                href="https://github.com/VALA9GALA/VanillaWeatherApp"
                taget="_blank"
                className="valagala"
              >
                VALAGALA
              </a>
            </small>
          </div>
        </div>
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
    </div>
  );
}

export default App;
