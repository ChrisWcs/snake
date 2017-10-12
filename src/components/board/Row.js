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

const getPixel = (t, i) => {
    switch(t){
        case "f":
            return <Food key={i}/>;
        case "b":
            return <SBody key={i}/>;
        case "h":
            return <SHead key={i}/>;
        default:
            return <Blank key={i}/>;
    }
};

const Row = ({arr}) => (
    <div style={style}>
        {arr.map( (x, i) => getPixel(x, i) )}
    </div>
);

export default Row;