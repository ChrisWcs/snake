import React, { Component } from 'react';
import Board from './board/Board';

import addSnakeToBoard from '../utils/addSnakeToBoard';
import createBlankBoard from '../utils/createBlankBoard';
import progressSnake from '../utils/progressSnake';

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
        const { mat } = this.state;

        const newMat = addSnakeToBoard( [...mat], progressSnake( [{r:0, c:0}], 'down', true  ), );
        

        return(
            <Board arr={mat}/>
        );
    }
}

export default App;
