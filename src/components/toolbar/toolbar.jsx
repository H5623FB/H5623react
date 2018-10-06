import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="toolbar_logo">
        <NavLink to="/">ILEC F&B UI</NavLink>
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
