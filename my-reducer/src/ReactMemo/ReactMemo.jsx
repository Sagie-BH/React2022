import React from "react";
import { useMemo, useCallback, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

// const arr =  [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
//   ];

// Try to increment Local number without rendering 'Work Work Work'
// If Array is not changing

const ReactMemo = () => {
  console.log("Dad Reandered");
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const changeChildNumber = (number) => {
    setChildNumber(number)
  }

  const memoChangeChildNumber = useCallback((number) => changeChildNumber(number),[])

  const incrementNumber = () => {
    setLocalNumber((state) => state + 1);
  };

  const getLargestNumber = () => {
    console.log("Getting largest number");
    console.log("Work Work Work");
    return { max : Math.max(...arr)};
  }
  const { max } = useMemo(() => getLargestNumber(), [arr])

  const changeArr = () => {
    setArr([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
         Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
  }

  return (
    <div>
      <h2>Local Number: {localNumber}</h2>
      <button onClick={incrementNumber}>Increment Local Number</button>
      <ReactMemoChild number={childNumber}
       changeNumber={memoChangeChildNumber} />
       <h2>Largest Number: {max}</h2>
       <button onClick={changeArr}>Change Array</button>
    </div>
  );
};

export default ReactMemo;
