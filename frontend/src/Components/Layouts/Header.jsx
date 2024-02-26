import React from "react";
import css from "../../Styles/Header.module.css";
import Layout from "./Layout";

const Header = () => {
  return (
    <div>
      <div className={css.header}>
        <div className={css.logo}>
          <img src="logo" alt="App Logo" />
          <span>ECHOMEET</span>
        </div>
        <nav className={css.navbar}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <div className={css.userAuth}></div> */}
      </div>
    </div>
  );
};

export default Header;
