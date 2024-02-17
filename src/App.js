import React from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Forecast from "./Forecast";
import { ThreeCircles } from "react-loader-spinner";
//THIS IS A NOTE TO SAY THAT MY OTHER DEPENDENCY IMPORTS WERE NOT WORKING SO I DELETED THEM AND LINKED BOOTSTRAP AND FONTAWESOME IN MY HTML HEAD-- I WILL WAIT TIL NEXT WEEK WHEN WE START BUILDING THE PROJECT TO REINSTALL THEM FROM NPM//

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
                href="https://github.com/VALA9GALA/react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
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
