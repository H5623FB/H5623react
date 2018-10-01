import React, { Component } from "react";
import fire from "../fbase";
//import key from 'weak-key';
import styles from "./styles.css";
import Input from "./inputfield";

class Data extends Component {
  //state = { closing: [], items: ['J2o', 'Coke', 'Orange', 'Apple','Mango', 'Pepsi'] }
  state = { items: [], opening: [], sale: [], closing: [] };
  //constructor(props) {
  // super(props);
  // function handleinputs (){

  //     return (var len = this.state.items.opening.length;)
  // console.log(len);
  // }
  
  componentWillMount() {
    let itemRef = fire.database().ref("list/items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      //let itemid = items.id;
      this.setState({ items: itemnames });
      //console.log(itemid);
    });
    let openRef = fire.database().ref("list/opening");
    openRef.on("value", snapshot => {
      let opening = { id: snapshot.key, text: snapshot.val() };
      let openingqty = opening.text;
      this.setState({ opening: openingqty });
      console.log(openingqty);
    });
    let saleRef = fire.database().ref("list/sale");
    saleRef.on("value", snapshot => {
      let sale = { id: snapshot.key, text: snapshot.val() };
      let saleqty = sale.text;
      this.setState({ sale: saleqty });
      console.log(saleqty);
    });
    let closingRef = fire.database().ref("list/closing");
    closingRef.on("value", snapshot => {
      let closing = { id: snapshot.key, text: snapshot.val() };
      let closingqty = closing.text;
      this.setState({ closing: closingqty });
      console.log(closingqty);
    });
  }

  render() {
    return (
      <div styles={styles.wrapper} className="wrapper">
        <div styles={styles.header1} className="header1">
          Items
        </div>
        <div styles={styles.header2} className="header2">
          {" "}
          Opening Stock
        </div>
        <div styles={styles.header3} className="header3">
          Sale
        </div>
        <div styles={styles.header4} className="header4">
          Closing Stock
        </div>
        <div styles={styles.header5} className="header5">
          Closing Stock
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

        <div styles={styles.inpute} className="inpute">
          {this.state.items.map(i => (
            <Input id={i} />
          ))}
        </div>
      </div>
    );
  }
 
}

export default Data;