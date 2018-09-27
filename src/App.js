import React, { Component } from 'react';
import Data from './components/data';
import Input from './components/inputfield';
//import Gridcss from './components/cssgrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Data />
      </div>
    );
  }
}

export default App;
