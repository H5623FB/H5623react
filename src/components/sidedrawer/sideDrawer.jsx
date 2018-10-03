import React, { Component } from "react";
import "./sideDrawer.css";
import { Link, NavLink } from "react-router-dom";

const SideDrawer = props => (
  
  <nav className="side-drawer">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);
export default SideDrawer;
