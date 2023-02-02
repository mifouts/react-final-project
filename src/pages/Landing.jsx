import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="container landing__container">
        <Link to={"/"}>
          <h1 className="movieflix__title click">
            <span className="red">MOVIEFLIX</span>
          </h1>
        </Link>
        <h3 className="movieflix__description click">
          Find the perfect movie for you!
        </h3>
        <form
          className="movieflix__search"
          onChange="loadingMovies(event)"
          onSubmit="searchBarForm(event)"
        >
          <input
            type="text"
            className="movieflix__input"
            placeholder="Movie Name"
            onChange="searchBarForm(event)"
            autofocus
          />
          <button
            className="submit__button nav__click"
            type="submit"
            onClick="searchBarForm(event)"
          >
            <i className="fa-solid fa-magnifying-glass search"></i>
          </button>
        </form>
        <div className="movie__overlay movie__overlay--loading">
          <i className="fas fa-spinner"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
