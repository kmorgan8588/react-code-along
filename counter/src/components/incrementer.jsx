import React from 'react';

const Incrementer = props => (
        <div>
            <button onClick={() => props.CounterUpdate(props.state + 1)}>Increment</button>
        </div>
);

export default Incrementer;