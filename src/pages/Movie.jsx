import React from "react";
import "./Movie.css";

function Movie({ movie }) {
  return (
    <div class="movies__container">
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">Fast & Furious 6</div>
            <div class="movie__year">2013</div>
          </div>
        </div>
      </div>
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">The Fast and the Furious</div>
            <div class="movie__year">2001</div>
          </div>
        </div>
      </div>
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">Fast Five</div>
            <div class="movie__year">2011</div>
          </div>
        </div>
      </div>
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">Fast & Furious</div>
            <div class="movie__year">2009</div>
          </div>
        </div>
      </div>
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">2 Fast 2 Furious</div>
            <div class="movie__year">2003</div>
          </div>
        </div>
      </div>
      <div class="movie__container">
        <div class="movie">
          <div class="movie__poster">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
              class="movie__poster--img"
              alt=""
            ></img>
          </div>
          <div class="movie__info--container">
            <div class="movie__title">
              The Fast and the Furious: Tokyo Drift
            </div>
            <div class="movie__year">2006</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
