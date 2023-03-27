import React from 'react';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = () => {
    let init = 1;
    let max = 20;
    const [counter, setCounter] = useState(1);
    const add = () => {
        if (counter < max) {
        setCounter(counter +1)
        };
    }
    const subtract = () => {
        if (counter > init) {
        setCounter(counter -1)
        };
    }
    return (
        <div className='counter'>
            <button onClick={ subtract }>-</button>
            <p>{counter}</p>
            <button onClick={ add }>+</button>
        </div>
    );
}

export default ItemCount;
