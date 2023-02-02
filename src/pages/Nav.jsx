import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav>
        <figure>
          <a href="/">
            <img
              src="./assets/movieflix logo.png"
              className="nav__logo nav__click"
              onclick=""
              alt=""
            />
          </a>
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a href="/" className="nav__link--anchor click">
              Home
            </a>
          </li>
          <li className="nav__link">
            <a href="/" className="nav__link--anchor click">
              Movies A-Z
            </a>
          </li>
          <li className="nav__link">
            <a
              href="mailto:movies@movieflix.com"
              className="nav__link--anchor click"
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
