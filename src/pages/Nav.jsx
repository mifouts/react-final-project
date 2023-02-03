import React from "react";
import "./Nav.css";
import NavImage from "../assets/movieflix logo.png";

function Nav() {
  return (
    <div>
      <nav>
        <figure>
          <a href="/">
            <img src={NavImage} className="nav__logo nav__click" alt="" />
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
