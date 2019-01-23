import React from "react";
import Link from "gatsby-link";
import styles from "./Navbar.module.sass";

const Navbar = () => {
  return (
    <nav
      className={`navbar ${styles.navbar}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title"> connor macleod</h1>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-end">
          <Link
            className="navbar-item"
            to="/tags/video"
            activeClassName={"navbar-item__active"}
          >
            videos
          </Link>

          <Link
            className="navbar-item"
            to="/about"
            activeClassName={"navbar-item__active"}
          >
            about
          </Link>
          <Link
            className="navbar-item"
            to="/contact"
            activeClassName={"navbar-item__active"}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
