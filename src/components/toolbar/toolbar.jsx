import React, { Component } from "react";
import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>

      <div className="toolbar_logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Daily Closing</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Requisition</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
