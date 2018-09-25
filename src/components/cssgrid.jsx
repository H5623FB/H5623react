import React, { Component } from 'react';
//import Grid from 'react-css-grid';
import styles from "./styles.css";

class Gridcss extends Component {
    
    render () {
        return (
            <div styles={styles.wrapper} className="wrapper">
            <div className="one">One</div>
            <div className="two">Two</div>
            <div className="three">Three</div>
            <div className="four">Four</div>
            <div className="five">Five</div>
            <div className="six">Six</div>
          </div>
        )
      }
}
 
export default Gridcss;