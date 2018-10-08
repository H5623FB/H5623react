import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../../../../fbase";

import {Items, Opening, Sale, Closing, UpdateClosing} from "./softDrinkParts";

import Submit from "../submit";
import "../../../styles.css";

class ClosingForm extends Component {
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
    submitChange = e => {
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
      <React.Fragment>
        <div className="wrapper">
          <Items items= {this.state.items} />
          <Opening opening= {this.state.opening} />
          <Sale sale={this.state.sale} />
          <Closing closing={this.state.closing} />
          <UpdateClosing rid={this.state.rid} change={this.handleChange} />
          <Submit submit={this.submitChange} />
        </div>
      </React.Fragment>
    );
  }
}
export default ClosingForm;
