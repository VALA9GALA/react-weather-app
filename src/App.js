import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HEY REACT!</h1>
        <Weather city="Athens" />
      </header>
    </div>
  );
}

export default App;
