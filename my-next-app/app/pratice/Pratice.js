"use client"; // Required for useState & useEffect in App Router

import { useEffect, useState } from "react";
import styles from "./practice.module.css"; // Create CSS file if needed

const Practice = () => {
  const [count, setCount] = useState(10);
  const [array, setarr] = useState([]);
  const [name, setName] = useState({ name: "jimmy", age: 26, arr: [1, 2, 3] });
  const [userInput, SetuserInput] = useState("");

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  // Two sum logic
  const [twoSumArray, settwoSumArray] = useState([]);
  const [target, settarget] = useState(0);
  const [result, setreult] = useState([]);

  const handleArrayChange = (value) => {
    const array = value.split(",").map((num) => parseInt(num.trim(), 10));
    settwoSumArray(array);
  };

  useEffect(() => {
    if (twoSumArray.length > 0) {
      setMin(Math.min(...twoSumArray));
    }
  }, [twoSumArray]);

  const findMax = () => {
    setMax(Math.max(...twoSumArray));
  };

  const twoSum = () => {
    const map = new Map();
    const n = twoSumArray.length;
    for (let index = 0; index < n; index++) {
      const temp = target - twoSumArray[index];
      if (map.has(temp)) {
        setreult([map.get(temp), index]);
        return;
      }
      map.set(twoSumArray[index], index);
    }
    setreult(["No valid pair found"]);
  };

  return (
    <div>
      <h1>Practice Page</h1>
      <button onClick={() => setCount(count + 1)}> Current Count : {count} </button>
      <button onClick={() => setarr([...array, count])}> Update Array </button>
      <button onClick={() => setName({ ...name, age: 30 })}> Change Age </button>

      <p>Array: [{array.join(", ")}]</p>

      <input type="text" placeholder="Type something..." onChange={(e) => SetuserInput(e.target.value)} />
      <h3>Show user input: {userInput}</h3>

      <input
        type="text"
        placeholder="Enter target number"
        onChange={(e) => settarget(parseInt(e.target.value, 10) || 0)}
      />

      <input type="text" placeholder="Enter numbers (comma-separated)" onChange={(e) => handleArrayChange(e.target.value)} />

      <button onClick={twoSum}> Find Two Sum: [{result.join(", ")}]</button>
      <button onClick={() => setMin(Math.min(...twoSumArray))}> Min: {min}</button>
      <button onClick={findMax}> Max: {max}</button>
    </div>
  );
};

export default Practice;
