import React, { Component } from "react";
import MovieCard from "./MovieCard";

const SectionName = ({ sectionName, moviesArray }) => {
  let movies = moviesArray;

  return (
    <div className="section-name">
      <h2>{sectionName}</h2>
      {movies.map((m) => (
        <MovieCard movie={m} />
      ))}
    </div>
  );
};

export default SectionName;
