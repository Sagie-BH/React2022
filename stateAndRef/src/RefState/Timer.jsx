import React from "react";

const Timer = ({title , counter, Increment , timer}) => {
  return (
    <>
    <h1>Counter: {counter}</h1>
      <h1>{title}</h1>
      <h2>Timer: {timer}</h2>
      <button onClick={() => Increment()}
      style={{ width: "100px", height: "50px" }}>Increment</button>
    </>
  );
};

export default Timer;
