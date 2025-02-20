"use client"; // Required for App Router

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const [array, setArray] = useState([]);

  return (
    <div>
      <h2>Counter Component</h2>
      <button onClick={() => setCount(count + 1)}> Count: {count} </button>
      <button onClick={() => setArray([...array, count])}> Add to Array </button>
      <p>Array: [{array.join(", ")}]</p>
    </div>
  );
};

export default Counter;
