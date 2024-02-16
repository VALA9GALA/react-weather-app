import React from "react";

import "./App.css";
import "./Weather.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3 d-flex justify-content-center">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autofocus="on"
              autocomplete="off"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button className="btn search-btn">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
