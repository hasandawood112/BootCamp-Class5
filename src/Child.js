import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
        <div>
            <h1>Counter using Context</h1>
            <h3>Counter : {counterValue}</h3>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                    Increase
            </button>
            <button onClick={()=> {counterValue[1](--counterValue[0])}}>
                    Decrease
            </button>
            <button onClick={()=> {counterValue[1](counterValue[0] - counterValue[0])}}>
                    Reset
            </button>
        </div>
    );
}

export default Child;