import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ILEC F&B
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
            <Navlink className="nav-item nav-link" to="/closing">
              Closing
            </Navlink>
            <Navlink className="nav-item nav-link" to="requisitions">
              Requisitions
            </Navlink>
            <Navlink className="nav-item nav-link" to="login">
              Login
            </Navlink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
