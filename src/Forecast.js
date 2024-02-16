import React from "react";

import "./App.css";
import "./Weather.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-date"></div>

          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="clear-sky-day"
            width="48"
          />
          <div className="forecast-temp">
            <span className="forecast-temp-max">11°/</span>
            <span className="forecast-temp-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
