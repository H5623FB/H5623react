import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

import Toolbar from "./components/toolbar/toolbar";
import SideDrawer from "./components/sidedrawer/sideDrawer";
import Backdrop from "./components/backdrop/backdrop";

import LoginForm from "./components/loginForm";
import ClosingForm from "./components/Pub/ClosingForm/SoftDrinks/SoftDrinks";
import Requisitions from "./components/Pub/Requisitions/requisitions";
import Home from "./components/home";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <ToastContainer />
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }} className="container">
          <Switch>
            <Route path="/closing" component={ClosingForm} />
            <Route path="/requisitions" component={Requisitions} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
