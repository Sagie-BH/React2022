import React from "react";
import { useReducer } from "react";
import Slider from "./Slider";

const reduce = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1,
      step: state.step,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
      step: state.step,
    };
  } else if (action.type === "updateSlider") {
    return {
      count: state.count,
      step: action.step,
    };
  } else {
    throw new Error();
  }
};

const Counter3 = () => {
  console.log("Counter Rendered");

  const [state, dispatch] = useReducer(reduce, {
    count: 0,
    step: 1,
  });

  return (
    <div>
      <h4>Counter</h4>
      <h4>{state.count}</h4>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <Slider
        min={1}
        max={100}
        onChange={(value) => {
          dispatch({
            type: "updateSlider",
            step: value,
          });
        }}
      />
      <hr />
      <h4>{state.step}</h4>
    </div>
  );
};

export default Counter3;
