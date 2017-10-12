const addSnakeToBoard = (board, snake) => {
    snake.forEach( (x, i) => {
        if( i === 0 ){
            board[x.r][x.c] = 'h';
        } else {
            board[x.r][x.c] = 'b';
        }
    });
    return board;
};

export default addSnakeToBoard;