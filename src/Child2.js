import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 10);

    return (
        <div>
            <h1>Counter using Reducer</h1>
            <h3>Counter : {state}</h3>
            <button onClick={() => dispatch('INCREASE')}>
                increase
                </button>

            <button onClick={() => dispatch('DECREASE')}>
                Decrease
                </button>

            <button onClick={() => dispatch('RESET')}>
                Reset
                </button>
        </div>
    );
}

export default Child2; 