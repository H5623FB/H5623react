import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>

      <div className="toolbar_logo">
        <Link to="/">ILEC F&B UI</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/closing">Daily Closing</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/requisitions">Requisition</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
