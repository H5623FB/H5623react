import React, { Component } from 'react';
import styles from "./styles.css";
import fire from "../fbase";

class InputF extends Component {
    state = { 
        items: ['J2o', 'Coke', 'Orange', 'Apple','Mango', 'Pepsi'],
        
        value:"" 
}    
    handleChange = e => {
        const value = { ...this.state.value };
        value[e.currentTarget.id] = e.currentTarget.value;
        this.setState({ value });
    
      };
      addMessage = e => {
        e.preventDefault();
        let value = this.state.value;
          fire
            .database()
            .ref("list/messages/")

            .set(value);
            this.cancelCourse();
        
      };
      cancelCourse = () => { 
        document.getElementById("myform").reset();
      }      
    render() { 
        return ( 
        <div>
           <div >
           <form id="myform" styles={styles.header5} className="header5">
               {this.state.items.map(i => (<input 
                    onChange={this.handleChange}
                    className="form-control-sm"
                    type="text"
                    placeholder="Closing Stock"
                    id={i}
                    key={i}
                    name="myForm"
                    />))}
            </form>
           </div>
           <button styles={styles.header6} 
                   className="header6" 
                   onClick={this.addMessage}>Submit</button>
        </div>)
    }
}
 
export default InputF;