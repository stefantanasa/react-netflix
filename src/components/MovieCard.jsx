import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const MovieCard = ({ movie }) => {
  let navigate = useNavigate();

  return (
    <div className="movie-card">
      <img className="movie-img" src={movie.Poster} alt="" />
      <Button
        variant="info"
        className="details-btn"
        onClick={() => {
          navigate(`/movie-details/${movie.imdbID}`);
        }}
      >
        Details
      </Button>
      <h5>{movie.Title}</h5>
    </div>
  );
};

export default MovieCard;
