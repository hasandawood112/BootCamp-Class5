import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = () => {
    return (
        <div>
            <hr />
            <Child />
            <hr />
            <Child2 />
        </div>
    );
}

export default Parent;