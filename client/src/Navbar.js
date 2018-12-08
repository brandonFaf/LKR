import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="navbar navbar-bright navbar-fixed-top" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-responsive-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">
            Life Knocking{" "}
          </Link>
        </div>
        <div
          className="collapse navbar-collapse navbar-responsive-collapse"
          role="navigation"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/about" className="navbar-btn">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-btn">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

// <nav>
//     <div>
//         <a href="/"> Life Knocking</a>
//     </div>
//     <div className="links">
//         <div className="link">Listen</div>
//         <div className="link">News</div>
//         <div className="link">About Us</div>
//         <div className="link">Contact Us</div>
//     </div>
// </nav>
