const createBlankBoard = (r, c) => {
    let arr = [];

    for(let i = 0; i < r; i++){
        arr[i] = [];
        for(let j = 0; j < c; j++){
            arr[i][j] = '';
        }
    }

    return arr;
}

export default createBlankBoard;