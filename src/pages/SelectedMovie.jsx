import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SelectedMovie() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSelectedMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=3c851f46&i=${id}`
        );
        const data = await response.json();
        setSelectedMovie(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchSelectedMovie();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!selectedMovie) {
    return <div>No movie found.</div>;
  }
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
