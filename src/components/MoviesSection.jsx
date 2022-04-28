import React, { Component } from "react";
import SectionName from "./SectionName";

const MoviesSection = ({ moviesArray }) => {
  return (
    <div>
      <SectionName
        moviesArray={moviesArray}
        sectionName={"Popular on Netflix"}
      />
    </div>
  );
};

export default MoviesSection;
