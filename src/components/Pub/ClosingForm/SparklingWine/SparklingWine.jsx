import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../../../../fbase";

import {
  Items,
  Opening,
  Sale,
  Closing,
  Delivered,
  Difference,
  PAR,
  Transfers,
  Wastage,
  UpdateClosing
} from "./SparklingWineParts";
import Submit from "../submit";
import "../../../styles.css";

class SparklingWine extends Component {
  state = {
    items: [],
    opening: [],
    sale: [],
    closing: [],
    delivered: [],
    comments: [],
    difference: [],
    par: [],
    transfers: [],
    wastage: [],
    rid: [],
    value: ""
  };
  componentWillMount() {
    let itemRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      this.setState({ items: itemnames });
    });
    let openRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Open");
    openRef.on("value", snapshot => {
      let opening = { id: snapshot.key, text: snapshot.val() };
      let openingqty = opening.text;
      this.setState({ opening: openingqty });
    });
    let saleRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Sold");
    saleRef.on("value", snapshot => {
      let sale = { id: snapshot.key, text: snapshot.val() };
      let saleqty = sale.text;
      this.setState({ sale: saleqty });
    });
    let closingRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Close");
    closingRef.on("value", snapshot => {
      let closing = { id: snapshot.key, text: snapshot.val() };
      let closingqty = closing.text;
      this.setState({ closing: closingqty });
    });
    let ridRef = fire.database().ref("ILEC/Pub/ClosingForm/Sparkling Wine/rid");
    ridRef.on("value", snapshot => {
      let rid = { id: snapshot.key, text: snapshot.val() };
      let ridqty = rid.text;
      this.setState({ rid: ridqty });
    });
    let commentsRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Comments");
    commentsRef.on("value", snapshot => {
      let comments = { id: snapshot.key, text: snapshot.val() };
      let commentsqty = comments.text;
      this.setState({ comments: commentsqty });
    });
    let deliveredRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Delivered");
    deliveredRef.on("value", snapshot => {
      let delivered = { id: snapshot.key, text: snapshot.val() };
      let deliveredqty = delivered.text;
      this.setState({ delivered: deliveredqty });
    });
    let differenceRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Difference");
    differenceRef.on("value", snapshot => {
      let difference = { id: snapshot.key, text: snapshot.val() };
      let differenceqty = difference.text;
      this.setState({ difference: differenceqty });
    });
    let parRef = fire.database().ref("ILEC/Pub/ClosingForm/Sparkling Wine/PAR");
    parRef.on("value", snapshot => {
      let par = { id: snapshot.key, text: snapshot.val() };
      let parqty = par.text;
      this.setState({ par: parqty });
    });
    let transfersRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Transfers");
    transfersRef.on("value", snapshot => {
      let transfers = { id: snapshot.key, text: snapshot.val() };
      let transfersqty = transfers.text;
      this.setState({ transfers: transfersqty });
    });
    let wastageRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Wastage");
    wastageRef.on("value", snapshot => {
      let wastage = { id: snapshot.key, text: snapshot.val() };
      let wastageqty = wastage.text;
      this.setState({ wastage: wastageqty });
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
        errors.message = "Only numbers accepted! Each field have to be filled";
        return toast.error(errors.message);
      }
      if (strLen !== ridLen) {
        errors.message = "Each field have to be filled!";
        return toast.error(errors.message);
      }
    }
    fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Close")

      .set(value);
    this.cancelCourse();
  };
  cancelCourse = () => {
    document.getElementById("swine").reset();
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Items items={this.state.items} />
          <PAR par={this.state.par} />
          <Opening opening={this.state.opening} />
          <Delivered delivered={this.state.delivered} />
          <Transfers transfers={this.state.transfers} />
          <Wastage wastage={this.state.wastage} />
          <Sale sale={this.state.sale} />
          <Closing closing={this.state.closing} />
          <Difference difference={this.state.difference} />
          <UpdateClosing rid={this.state.rid} change={this.handleChange} />
          <Submit submit={this.submitChange} />
        </div>
      </React.Fragment>
    );
  }
}
export default SparklingWine;
