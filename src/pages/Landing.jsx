import React, { useEffect, useState } from "react";
import "./Landing.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

function Landing() {
  const [movies, setMovies] = useState([]);

  async function getMovies(event) {
    const formValue = event.target.value;
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`
    );
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <body className="img__placeholder">
        <div className="container landing__container">
          <h1 className="movieflix__title click">
            <span className="red">MOVIEFLIX</span>
          </h1>
          <h3 className="movieflix__description click">
            Find the perfect movie for you!
          </h3>
          <form className="movieflix__search" /*onChange={""} onSubmit={""}*/>
            <input
              type="text"
              className="movieflix__input"
              placeholder="Movie Name"
              /*onChange={""}*/
            />
            <button
              className="submit__button nav__click"
              type="submit"
              /*onClick={""}*/
            >
              <SearchIcon />
            </button>
          </form>
          <div className="movie__overlay movie__overlay--loading">
            <i className="fas fa-spinner"></i>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Landing;
