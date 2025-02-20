"use client";

import { useState, useEffect } from "react";

const TwoSum = () => {
  const [twoSumArray, setTwoSumArray] = useState([]);
  const [target, setTarget] = useState(0);
  const [result, setResult] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleArrayChange = (value) => {
    const array = value.split(",").map((num) => parseInt(num.trim(), 10));
    setTwoSumArray(array);
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
    for (let index = 0; index < twoSumArray.length; index++) {
      const temp = target - twoSumArray[index];
      if (map.has(temp)) {
        setResult([map.get(temp), index]);
        return;
      }
      map.set(twoSumArray[index], index);
    }
    setResult(["No valid pair found"]);
  };

  return (
    <div>
      <h2>Two Sum Finder</h2>
      <input type="text" placeholder="Enter target" onChange={(e) => setTarget(parseInt(e.target.value, 10) || 0)} />
      <input type="text" placeholder="Enter numbers (comma-separated)" onChange={(e) => handleArrayChange(e.target.value)} />
      
      <button onClick={twoSum}> Find Two Sum: [{result.join(", ")}] </button>
      <button onClick={() => setMin(Math.min(...twoSumArray))}> Min: {min} </button>
      <button onClick={findMax}> Max: {max} </button>
    </div>
  );
};

export default TwoSum;
