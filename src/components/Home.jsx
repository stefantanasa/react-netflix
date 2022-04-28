import React from "react";
import Jumbotron from "./Jumbotron";
import MoviesSection from "./MoviesSection";
import MyNavbar from "./MyNavbar";
const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Jumbotron />
      <MoviesSection />
    </div>
  );
};

export default Home;
