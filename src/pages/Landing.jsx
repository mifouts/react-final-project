import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div class="container landing__container">
        <Link to={"/"}>
          <h1 class="movieflix__title click">
            <span class="red">MOVIEFLIX</span>
          </h1>
        </Link>
        <h3 class="movieflix__description click">
          Find the perfect movie for you!
        </h3>
        <form
          class="movieflix__search"
          onchange="loadingMovies(event)"
          onsubmit="searchBarForm(event)"
        >
          <input
            type="text"
            class="movieflix__input"
            placeholder="Movie Name"
            onchange="searchBarForm(event)"
            autofocus
          />
          <button
            class="submit__button nav__click"
            type="submit"
            onclick="searchBarForm(event)"
          >
            <i class="fa-solid fa-magnifying-glass search"></i>
          </button>
        </form>
        <div class="movie__overlay movie__overlay--loading">
          <i class="fas fa-spinner"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
