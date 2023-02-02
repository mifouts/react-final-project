import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <figure>
          <a href="/">
            <img
              src="./assets/movieflix logo.png"
              class="nav__logo nav__click"
              onclick=""
              alt=""
            />
          </a>
        </figure>
        <ul class="nav__link--list">
          <li class="nav__link">
            <a href="/" class="nav__link--anchor click">
              Home
            </a>
          </li>
          <li class="nav__link">
            <a href="/" class="nav__link--anchor click">
              Movies A-Z
            </a>
          </li>
          <li class="nav__link">
            <a
              href="mailto:movies@movieflix.com"
              class="nav__link--anchor click"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
