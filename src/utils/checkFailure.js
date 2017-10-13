const checkFailure = (snake, rMax, cMax) => {

    let head = snake[0];

    if( head.r < 0 || head.c < 0 || head.r >= rMax || head.c >= cMax) {
        return true;
    }

    snake.forEach( x => {
        if(head.r === x.r && head.c === x.c){
            return true;
        }
    });
    
    return false;
};

export default checkFailure;