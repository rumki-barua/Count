import React, { Component } from "react";
import Box from './box';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        boxes: [],
    }
    CreateBox = () => {
        const { boxes } = this.state;
        this.setState({ boxes: [...boxes,0]});
    }
   DeleteBox = () => {
    this.setState( { boxes : [] } );
    
   }

    render() {
        return (
            <div  className='text-center' style={ { margin: '70px' } }>
                <button type="button" class="btn btn-info m-4 " onClick={this.CreateBox}>Add New Button</button>
                <button type="button" class="btn btn-light" onClick={this.DeleteBox}>Delete Button  </button>
            <br/>
            <br/>
                {
                     this.state.boxes.map((number, index) => (
                        <div key={number}>
                            <Box num={number}/>
                            <br/>
                        </div>
                    ))
            }
               
            </div>
        )
        };
    }
export default App;