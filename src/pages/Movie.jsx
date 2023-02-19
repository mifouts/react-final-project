import React from "react";
import "./Movie.css";

function Movie({ movie }) {
  return (
    <div className="movies__container">
      <div className="movie__container click">
        <div className="movie">
          <div className="movie__poster">
            <img src={movie.Poster} className="movie__poster--img" alt="" />
          </div>
          <div className="movie__info--container">
            <div className="movie__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
