import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(10); 
    const [res, setRes] = useState([]); 
    const [task, setTask] = useState('');

    const handle = () => {
        setCount((x) => x + 1);
        setRes((x) => [...x, count]); // This may not capture the updated count correctly due to closure.
    };

    const reset = () => {
        setCount(10);
        setRes([]); // Reset the res array
    };

    // Define the Test component as a constant using an arrow function
    const Test = (props) => {
        return <h1>hi {props.name} and bye </h1>;
    };


    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    useEffect(() => {
        // Log current count whenever it changes
        console.log(`Current count: ${count}`);
        
        return () => {
            console.log('res has changed:', res);
        };
    }, [count, res]); // Effect runs when count or res changes



    return (
        <div className='main'> 
            <h1 className='teemo'> Current Number: {count} !</h1>

            {/* Render the Test component */}
            <h2> 
                <Test name="zz" />
            </h2>

            {/* Counter buttons */}
            <button onClick={handle}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count * 2)}>Times 2</button>
            <button onClick={reset}>Reset</button>

            {/* Display res array */}
            <h2>res: {JSON.stringify(res)}</h2>


            <input className='fk'
                type="text"
                value={task}
                name='number'
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <h3>Task: {task}</h3>

        </div>
    );
};

export default Counter;
