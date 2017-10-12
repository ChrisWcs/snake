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

        this.startGame = this.startGame.bind(this);
    }

    startGame(){
        
    }

    render(){

        return(
            <Board arr={mat}/>
        );
    }
}

export default App;
