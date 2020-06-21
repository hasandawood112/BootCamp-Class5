import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h1>Counter using Reducer</h1>
            <h2>{state}</h2>

            <button onClick={() => dispatch('DECREASE')}>
                Decrease
                </button>

            <button onClick={() => dispatch('INCREASE')}>
                Increase
                </button>

            <button onClick={() => dispatch('RESET')}>
                Reset
                </button>
        </div>
    );
}

export default Child2; 