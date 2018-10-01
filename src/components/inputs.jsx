import React, { Component } from 'react';
import InputF from './input';
//import Button from './components/button';
import Button from './button';

class Inputs extends Component {
    state = { 
        items: ['J2o', 'Coke', 'Orange', 'Apple','Mango', 'Pepsi'], }

    render() { 
        return (
            <div> 
            <div>
            {this.state.items.map(i => (
              <InputF   value={this.props.value} id={i} />
            ))}
            </div>
            <div>
            <Button />
            </div>
            </div>
         );
    }
}
 
export default Inputs;