import React from "react";
import { useReducer } from "react";

const reduce = (state, action) => {
    if(action === 'increment'){
        return state + 1;
    } else if (action === 'decrement'){
        return state - 1;
    } else if (action === 'reset'){
        return 0;
    } else {
        throw new Error();
    }
};

const Counter2 = () => {
  console.log("Counter Rendered");

  const [count, dispatch] = useReducer(reduce, 0);

  return (
    <div>
      <h4>Counter</h4>
      <h4>{count}</h4>
      <button onClick={() => {dispatch('increment')}}>+</button>
      <button onClick={() => {dispatch('decrement')}}>-</button>
      <button onClick={() => {dispatch('reset')}}>Reset</button>
    </div>
  );
};

export default Counter2;
