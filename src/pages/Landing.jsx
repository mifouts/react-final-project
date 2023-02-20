import React, { useState } from "react";
import "./Landing.css";
import SearchIcon from "@mui/icons-material/Search";

function Landing() {
  const [movies, setMovies] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`
    );
    const data = await response.json();
    setMovies(data.Search.slice(0, 6));
    setLoading(false);
  };

  return (
    <div>
      <div className="container landing__container">
        <h1 className="movieflix__title click">
          <span className="red">MOVIEFLIX</span>
        </h1>
        <h3 className="movieflix__description click">
          Find the perfect movie for you!
        </h3>
        <form className="movieflix__search" onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            className="movieflix__input"
            placeholder="Movie Name"
            onChange={(e) => setFormValue(e.target.value)}
            value={formValue}
          />
          <button
            className="submit__button nav__click"
            type="submit"
            onClick={(e) => handleSearch(e)}
          >
            <SearchIcon className="searchIcon" />
          </button>
        </form>
        {!loading && (
          <div className="movies__container">
            {movies.map((movie) => (
              <div
                className="movie__container"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="movie">
                  <div className="movie__poster">
                    <img
                      src={movie.Poster}
                      className="movie__poster--img"
                      alt=""
                    />
                  </div>
                  <div className="movie__info--container">
                    <div className="movie__title">{movie.Title}</div>
                    <div className="movie__year">{movie.Year}</div>
                  </div>
                </div>
              </div>
            ))}
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
                <h4 className="selectedMovie__rating">{selectedMovie.Rated}</h4>
                <p className="selectedMovie__plot">{selectedMovie.Plot}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
