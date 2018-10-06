import React from "react";
import "./sideDrawer.css";
import { NavLink } from "react-router-dom";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="closing">Closing</NavLink>
        </li>
        <li>
          <NavLink to="requisitions">Requisitions</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
