import React from "react";
import Link from "gatsby-link";

const Navbar = () => (
  <section className="section">
    <div className="container">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1> Connor Macleod</h1>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/tags/video">
            videos
          </Link>
          <Link className="navbar-item" to="/tags/photo">
            photos
          </Link>
          <Link className="navbar-item" to="/about">
            about
          </Link>
        </div>
      </nav>
    </div>
  </section>
);

export default Navbar;
