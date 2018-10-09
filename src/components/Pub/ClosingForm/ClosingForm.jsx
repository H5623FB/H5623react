import React, { Component } from 'react';
import SoftDrinks from './SoftDrinks/SoftDrinks'
import Aperitifs from './Aperitifs/Aperitifs'
import "../../styles.css";

class ClosingForm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div >
                <SoftDrinks className="wrapper"/>
                <Aperitifs className="wrapper"/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ClosingForm;

