const progressSnake = (snake, direction, food) => {
    let temp = food ? [...snake] : [...snake.slice( 0, snake.length - 1 )];

    let newHead = {
        r: snake[0].r,
        c: snake[0].c
    };

    if(direction === "up"){
        newHead.r = newHead.r - 1;
    }else if(direction === "down"){
        newHead.r = newHead.r + 1;
    }else if(direction === "right"){
        newHead.c = newHead.c + 1;
    }else{
        newHead.c = newHead.c - 1;
    }
    
    temp = [ newHead, ...temp];
    return temp;
}

export default progressSnake;