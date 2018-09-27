import React, { Component } from 'react';
import styles from "./styles.css";
import fire from "../fbase";

class Input extends Component {
    state = { ivalue:"" }
    
    handleChange = (e) =>{
        const ivalue = {...this.state.ivalue};
        ivalue[e.currentTarget.id] = e.currentTarget.value;
        this.setState({ivalue});
    };    
    
    addMessage = (e) =>{
            e.preventDefault(); // <- prevent form submit from reloading the page
            fire.database().ref('list/messages').set( this.state.ivalue );
            this.ivalue = ''; // <- clear the input
          };
   
    render() { 
        
        return ( <form onSubmit={this.addMessage}><input onChange={this.handleChange} ivalue={this.state.ivalue} id={this.props.id} className="form-control-sm"  type="text" placeholder="Closing Stock" /><input type="submit"/></form> );
    }
}
 
export default Input;

