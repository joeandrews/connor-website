import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1> Connor Macleod</h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          work
        </Link>
        <Link className="navbar-item" to="/about">
          about
        </Link>
        <Link className="navbar-item" to="/about">
          contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

