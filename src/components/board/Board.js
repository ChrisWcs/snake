import React from 'react';

import Row from './Row';

const Board = ({arr}) => (
    <div>
        {arr.map( (r, i) => <Row key={i} arr={r} />)}
    </div>
);

export default Board;