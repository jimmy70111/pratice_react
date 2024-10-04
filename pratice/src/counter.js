import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(10); 
    const [res, setRes] = useState([]); 

    const handle = () => {
        setCount((x) => x + 1);
        setRes((x) => [...x, count]); // This may not capture the updated count correctly.
    };

    const reset = () => {
        setCount(10);
        setRes([]); // Optional: reset res when count resets.
    };

    useEffect(() => {
        // Log current count whenever it changes
        console.log(`Current count: ${count}`);
        
        // This effect runs when res changes
        return () => {
            console.log('res has changed:', res);
        };
    }, [count, res]); // Dependency array: effect runs when count or res changes

    return (
        <div className='main'> 
            <h1 className='teemo'>Hello World {count}</h1>
            <button onClick={handle}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={reset}>Reset</button>

            <h2>res: {JSON.stringify(res)}</h2>
        </div>
    );
};

export default Counter;
