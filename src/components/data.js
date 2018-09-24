import React, { Component } from 'react';
import fire from "../fbase";
//import key from 'weak-key';
//import styles from "./styles.css";


class Data extends Component {
      
    //state = { closing: [], items: ['J2o', 'Coke', 'Orange', 'Apple','Mango', 'Pepsi'] }
    state = { items: [], opening: [], sale: [], closing: [], }
    // constructor(props) {
    //     super(props);
    //     //this.state = { items: [] };
    //     console.log(this.state.items); 
    //     }
    componentWillMount() {
        
        let itemRef = fire.database().ref("list/items");
        itemRef.on("value", snapshot => {
        let items = { id: snapshot.key, text: snapshot.val() };
        let itemnames = items.text;
        this.setState({items: itemnames}); 
        console.log(itemnames);
        });
        let openRef = fire.database().ref("list/opening");
        openRef.on("value", snapshot => {
        let opening = { id: snapshot.key, text: snapshot.val() };
        let openingqty = opening.text;
        this.setState({opening: openingqty});
        console.log(openingqty);
        });
        let saleRef = fire.database().ref("list/sale");
        saleRef.on("value", snapshot => {
        let sale = { id: snapshot.key, text: snapshot.val() };
        let saleqty = sale.text;
        this.setState({sale: saleqty});
        console.log(saleqty);
        });
        let closingRef = fire.database().ref("list/closing");
        closingRef.on("value", snapshot => {
        let closing = { id: snapshot.key, text: snapshot.val() };
        let closingqty = closing.text;
        this.setState({closing: closingqty});
        console.log(closingqty);
        });  
    }  
    render() {
   
        return (
        
            <div className="container">
            <div className="row">
              <div className="col-sm-3">
              {this.state.items.map(i => (
                    <p key={i.id}>{i}</p>
                ))}  
              </div>
              <div className="col-sm-3">
              {this.state.opening.map(o => (
                    <p key={o.id}>{o}</p>
                ))}  
              </div>
              <div className="col-sm-3">
              {this.state.sale.map(s => (
                    <p key={s.id}>{s}</p>
                ))}  
              </div>
              <div className="col-sm-3"> 
              {this.state.closing.map(c => (
                    <p key={c.id}>{c}</p>
                ))}  
              </div>
              </div>
          </div>
          
                       
        );
    }

}

export default Data;