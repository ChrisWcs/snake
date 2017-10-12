import React, { Component } from 'react';
import Board from './board/Board';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            mat: [
                ['h', 'b', 'b'],
                ['', '', 'b'],
                ['', '', ''],
            ]
        }
    }


    render(){
        return(
            <Board arr={this.state.mat}/>
        );
    }
}

export default App;
