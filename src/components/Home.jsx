import React, { useEffect } from "react";
import Jumbotron from "./Jumbotron";
import MoviesSection from "./MoviesSection";
import MyNavbar from "./MyNavbar";
import { useState } from "react";
const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  let fetchData = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=f2be261d&s=harry%20potter"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        setMoviesArray(data.Search);
      } else {
        console.log("Response is not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MyNavbar />
      <Jumbotron />
      <MoviesSection moviesArray={moviesArray} />
    </div>
  );
};

export default Home;
