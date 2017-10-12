import React, { Component } from 'react';
import Board from './board/Board';

import addSnakeToBoard from '../utils/addSnakeToBoard';
import createBlankBoard from '../utils/createBlankBoard';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            mat: createBlankBoard(5,5)
        }
    }


    render(){
        const {mat} = this.state;
        const snake = [
            { r: 0, c: 1},
            { r: 0, c: 0},
            { r: 4, c: 4},
        ];

        const matrix = addSnakeToBoard([...mat], snake);

        return(
            <Board arr={mat}/>
        );
    }
}

export default App;
