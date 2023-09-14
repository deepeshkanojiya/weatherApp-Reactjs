import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="https://deepeshkanojiya.github.io/portfolio/">
        Developed by{" Deepesh Kanojiya "}
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
