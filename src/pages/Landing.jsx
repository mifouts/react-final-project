import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Landing() {
  const moviesContainerEl = document.querySelector(".movies__container");
  const landingContainerEl = document.querySelector(".landing__container");
  const loading = document.querySelector(".movie__overlay--loading");

  function loadingMovies(event) {
    event.preventDefault();
    loading.classList += " movie__overlay--visible";
    setTimeout(() => {
      loading.classList.remove("movie__overlay--visible");
    }, 2000);
  }

  async function searchBarForm(event) {
    const formValue = event.target.value;
    const movie = await axios.get(
      `https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`
    );

    const movieData = await movie.json();
    if (!movieData.Search) {
      moviesContainerEl.style.display = "none";
      landingContainerEl.style.display = "block";
    } else if (movieData.Search) {
      moviesContainerEl.style.display = "flex";
      landingContainerEl.style.display = "none";
    }
    moviesContainerEl.innerHTML = movieData.Search.slice(0, 6)
      .map((movie) => moviesHTML(movie))
      .join("");

    event.preventDefault();
  }

  function moviesHTML(movie) {
    return `<div class="movie__container">
    <div class="movie">
        <div class="movie__poster">
            <img src=${movie.Poster} class="movie__poster--img" alt="">
        </div>
        <div class="movie__info--container">
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__year">${movie.Year}</div>
        </div>
    </div>
</div>`;
  }
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
          onChange={loadingMovies()}
          onSubmit={searchBarForm()}
        >
          <input
            type="text"
            className="movieflix__input"
            placeholder="Movie Name"
            onChange={searchBarForm()}
            autofocus
          />
          <button
            className="submit__button nav__click"
            type="submit"
            onClick={searchBarForm()}
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
