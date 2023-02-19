import React, { useState } from "react";
import "./Landing.css";
import SearchIcon from "@mui/icons-material/Search";

function Landing() {
  const [movies, setMovies] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    await fetch(`https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search.slice(0, 6)))
      .finally(() => setLoading(false));
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
            <SearchIcon />
          </button>
        </form>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className="movies__container">
            {movies.map((movie) => (
              <div className="movie__container click">
                <div className="movie">
                  <div className="movie__poster">
                    <img
                      src={movie.poster}
                      className="movie__poster--img"
                      alt=""
                    />
                  </div>
                  <div className="movie__info--container">
                    <div className="movie__title">{movie.title}</div>
                    <div className="movie__year">{movie.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
