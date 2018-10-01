import React, { Component } from "react";
import styles from "./styles.css";
import fire from "../fbase";

class Input extends Component {
  state = { ivalue: "" };

  handleChange = e => {
    const ivalue = { ...this.state.ivalue };
    ivalue[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ ivalue });
  
  };
  handleSorting = e => {
    let obj = this.state.ivalue;
    for (let k in obj) {
      let num = obj[k];
      let test = [];
      test.push(num);
      console.log(test);
    }
  };

  addMessage = e => {
    e.preventDefault();
    let ivalue = this.state.ivalue;
   
      fire
        .database()
        .ref("list/messages/")
       
        .push(ivalue);
    //}
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.addMessage}>
        <input
          onChange={this.handleChange}
          ivalue={this.state.ivalue}
          id={this.props.id}
          className="form-control-sm"
          type="text"
          placeholder="Closing Stock"
          test={()=>this.props.test}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Input;