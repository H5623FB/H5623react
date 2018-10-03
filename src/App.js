import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import NavBar from "./components/navBar";
import Toolbar from "./components/toolbar/toolbar";
import SideDrawer from "./components/sidedrawer/sideDrawer";
import LoginForm from "./components/loginForm";
import Data from "./components/data";
import Requisitions from "./components/requisitions";
import Home from "./components/home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer />
        <main style={{ marginTop: "64px" }} className="container">
          <Switch>
            <Route path="/closing" component={Data} />
            <Route path="/requisitions" component={Requisitions} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
