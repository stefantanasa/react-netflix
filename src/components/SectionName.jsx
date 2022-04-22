import React, { Component } from "react";
import MovieCard from "./MovieCard";

const SectionName = ({ sectionName }) => {
  return (
    <div className="section-name">
      <h2>{sectionName}</h2>
      <MovieCard />
    </div>
  );
};

export default SectionName;
