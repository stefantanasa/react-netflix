import { useState } from "react";

import "./App.css";
import Jumbotron from "./components/Jumbotron";
import MoviesSection from "./components/MoviesSection";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Jumbotron />
      <MoviesSection />
    </div>
  );
}

export default App;
