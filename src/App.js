import React, { Component } from "react";
import Data from "./components/data";
import Navbar from "./components/navbar";
//import Input from './components/input';
//import Gridcss from './components/cssgrid';
//import Button from './components/button';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Data />
      </div>
    );
  }
}

export default App;
