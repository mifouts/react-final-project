import React from "react";
import { useParams } from "react-router-dom";

function SelectedMovie(props) {
  const { id } = useParams();
  const { selectedMovie } = props;
  return (
    <div>
      {selectedMovie && (
        <div className="selected__movie--container">
          <div className="selected__movie--poster">
            <img
              src={selectedMovie.Poster}
              alt=""
              className="selected__movie--poster-img"
            />
          </div>
          <h2 className="selectedMovie__title">{selectedMovie.Title}</h2>
          <h3 className="selectedMovie__year">{selectedMovie.Year}</h3>
          {selectedMovie.Rated ? (
            <h4 className="selectedMovie__rating">{selectedMovie.Rated}</h4>
          ) : (
            <p className="selectedMovie__unavailable">Rating not available</p>
          )}
          {selectedMovie.Plot ? (
            <p className="selectedMovie__plot">{selectedMovie.Plot}</p>
          ) : (
            <p className="selectedMovie__unavailable">Plot not available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SelectedMovie;
