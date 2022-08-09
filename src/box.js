import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Box extends Component {
    state = {
        number : 6,
        className:"btn btn-outline-primary"
    };
    constructor({ num }){//props number=5
        super();
        this.state = {
            number: num,
            className:"btn btn-outline-primary"
        };
    }
 increment = () => {
    const newNumber = this.state.number + 1;
    const newState = { number: newNumber};
    this.setState(newState);
 }
 decrement = () => {
    const number = this.state.number;
    if (number == 0){
        const newClassName = "btn btn-secondary";
        const newState = { number: this.state.number, className:newClassName };
        this.setState(newState);
    }
    else{
        const newNumber = this.state.number - 1;
        const newState = { number: newNumber };
        this.setState(newState);
    }
    }
    
render(){
    return (
        <div>
            
            <button type="button" class={this.state.className} onClick={this.decrement}> - </button>
            <span class="m-2">{this.state.number}</span>
            <button type="button" class="btn btn-outline-success" onClick={this.increment}> + </button>

        </div>

    );
}
 }
 export default Box;