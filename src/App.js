import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/index.js";

function App() {
  return (
    <h1>
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    </h1>
  );
}

export default App;
