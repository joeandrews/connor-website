import React from "react";
import Link from "gatsby-link";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="title">Connor MacLeod</div>
        </Link>
      </div>
      <div className="navbar-start">
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
    </nav>
  );
};

export default Navbar;
