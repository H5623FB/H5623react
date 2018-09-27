import React, { Component } from 'react';
import styles from "./styles.css";

class Input extends Component {
    
    render() { 
        
        return ( <input id={this.props.id} className="form-control-sm"  type="text" placeholder="Closing Stock" /> );
    }
}
 
export default Input;