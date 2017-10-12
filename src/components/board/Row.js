import React from 'react';

import Blank from './pixels/Blank';
import Food from './pixels/Food';
import SBody from './pixels/SBody';
import SHead from './pixels/SHead';

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const Row = ({arr}) => (
    <div style={style}>
        {arr.map( (x, i) => )}
    </div>
);

export default Row;