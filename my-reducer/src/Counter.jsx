import React from "react";
import { useReducer } from "react";

const reduce = (state, value) => {
  return state + value;
};

const Counter = () => {
  console.log("Counter Rendered");

  const [count, dispatch] = useReducer(reduce, 0);

  return (
    <div>
      <h4>Counter</h4>
      <h4>{count}</h4>
      <button onClick={() => {dispatch(1)}}>+</button>
      <button onClick={() => {dispatch(-1)}}>-</button>

    </div>
  );
};

export default Counter;
