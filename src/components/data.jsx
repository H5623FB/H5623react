import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../fbase";
import styles from "./styles.css";

class Data extends Component {
  state = {
    items: [],
    opening: [],
    sale: [],
    closing: [],
    rid: [],
    value: ""
  };
  componentWillMount() {
    let itemRef = fire.database().ref("list/items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      this.setState({ items: itemnames });
    });
    let openRef = fire.database().ref("list/opening");
    openRef.on("value", snapshot => {
      let opening = { id: snapshot.key, text: snapshot.val() };
      let openingqty = opening.text;
      this.setState({ opening: openingqty });
    });
    let saleRef = fire.database().ref("list/sale");
    saleRef.on("value", snapshot => {
      let sale = { id: snapshot.key, text: snapshot.val() };
      let saleqty = sale.text;
      this.setState({ sale: saleqty });
    });
    let closingRef = fire.database().ref("list/closing");
    closingRef.on("value", snapshot => {
      let closing = { id: snapshot.key, text: snapshot.val() };
      let closingqty = closing.text;
      this.setState({ closing: closingqty });
    });
    let ridRef = fire.database().ref("list/rid");
    ridRef.on("value", snapshot => {
      let rid = { id: snapshot.key, text: snapshot.val() };
      let ridqty = rid.text;
      this.setState({ rid: ridqty });
    });
  }
  handleChange = e => {
    const value = { ...this.state.value };
    value[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ value });
  };
  addMessage = e => {
    e.preventDefault();
    let value = this.state.value;
    let str = [];
    let ridLen = this.state.rid.length;
    const errors = {};

    for (let key in value) {
      str.push(value[key]);
    }
    let strLen = str.length;
    function IsNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (strLen === 0) {
      errors.message = "Each field has to be filled!";
      return toast.error(errors.message);
    }

    for (let key in value) {
      str += value[key];

      if (IsNumeric(value[key]) === false) {
        errors.message = "Only numbers accepted!";
        return toast.error(errors.message);
      }
      if (strLen !== ridLen) {
        errors.message = "Each field have to be filled!";
        return toast.error(errors.message);
      }
    }
    fire
      .database()
      .ref("list/closing/")

      .set(value);
    this.cancelCourse();
  };
  cancelCourse = () => {
    document.getElementById("myform").reset();
  };

  render() {
    return (
      <div>
        <div styles={styles.wrapper} className="wrapper">
          <div styles={styles.header1} className="header1">
            Items
          </div>
          <div styles={styles.header2} className="header2">
            Opening
          </div>
          <div styles={styles.header3} className="header3">
            Sale
          </div>
          <div styles={styles.header4} className="header4">
            Closing
          </div>
          <div styles={styles.header5} className="header5">
            Update Closing
          </div>

          <div styles={styles.items} className="items">
            {this.state.items.map(i => (
              <p styles={styles.rowstyle} className="rowstyle" key={i.id}>
                {i}
              </p>
            ))}
          </div>
          <div styles={styles.opening} className="opening">
            {this.state.opening.map(o => (
              <p styles={styles.rowstyle} className="rowstyle" key={o.id}>
                {o}
              </p>
            ))}
          </div>

          <div styles={styles.sale} className="sale">
            {this.state.sale.map(s => (
              <p styles={styles.rowstyle} className="rowstyle" key={s.id}>
                {s}
              </p>
            ))}
          </div>

          <div styles={styles.closing} className="closing">
            {this.state.closing.map(c => (
              <p styles={styles.rowstyle} className="rowstyle" key={c.id}>
                {c}
              </p>
            ))}
          </div>
          <div>
            <div>
              <form id="myform" styles={styles.inpute} className="inpute">
                {this.state.rid.map(i => (
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    label="update"
                    type="text"
                    placeholder="Closing"
                    id={i}
                    key={i}
                    name="myForm"
                  />
                ))}
              </form>
            </div>
          </div>
          <div>
            <button className="btn btn-success" onClick={this.addMessage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Data;
