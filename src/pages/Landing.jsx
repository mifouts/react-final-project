import React, { useEffect, useState } from "react";
import "./Landing.css";
import SearchIcon from "@mui/icons-material/Search";

function Landing() {
  const [movies, setMovies] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState("");

  const handleChange = (event) => {
    setFormValue(event.target.value);
  };

  useEffect(() => {
    const handleSearch = () => {
      fetch(`https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.slice(0, 6)))
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
          <form className="movieflix__search" onSubmit={handleSearch}>
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
              onClick={handleSearch}
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
  });
}

export default Landing;
