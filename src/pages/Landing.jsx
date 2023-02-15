import React, { useEffect, useState } from "react";
import "./Landing.css";
import Movie from "./Movie";
import SearchIcon from "@mui/icons-material/Search";

function Landing() {
  const [formValue, setFormValue] = useState("");
  const [movies, setMovies] = useState({});
  const [showMovies, setShowMovies] = useState(false);

  const handleChange = (event) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    const movie = await fetch(
      `https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`
    );
    const movieData = await movie.json();
    setMovies(movieData);
  };

  useEffect(() => {
    if (movies.Search) {
      setShowMovies(true);
    } else {
      setShowMovies(false);
    }
  }, [movies]);

  return (
    <div>
      <div className="container landing__container">
        <h1 className="movieflix__title click">
          <span className="red">MOVIEFLIX</span>
        </h1>
        <h3 className="movieflix__description click">
          Find the perfect movie for you!
        </h3>
        <form className="movieflix__search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="movieflix__input"
            placeholder="Movie Name"
            onChange={handleChange}
            value={formValue}
          />
          <button
            className="submit__button nav__click"
            type="submit"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </button>
        </form>
        {showMovies && (
          <div>
            {movies.Search.slice(0, 6).map((movie) => (
              <Movie movie={movie} key={movie.imdbID} />
            ))}
          </div>
        )}
        <div className="movie__overlay movie__overlay--loading">
          <i className="fas fa-spinner"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
