import React from 'react';

const Decrementer = props => (
    <div>
        <button name='Decrementer' onClick={() => props.CounterUpdate(props.state - 1)}>Decrement</button>
    </div>
);

export default Decrementer;