import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ILEC F&B
        </Link>
        <Link className="Navbar_Link" to="/">
          Login
        </Link>
        <Link className="Navbar_Link" to="/">
          G&D daily closing
        </Link>
        <Link className="Navbar_Link" to="/">
          G&D daily closing
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/closing">
              Closing
            </NavLink>
            <NavLink className="nav-item nav-link" to="requisitions">
              Requisitions
            </NavLink>
            <NavLink className="nav-item nav-link" to="login">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
