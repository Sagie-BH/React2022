import React, { useState } from "react";

const Example = () => {
  const [num, setNum] = useState(0);

  const addOne = () => {
    // setNum((n) => n + 1);
    setNum(num + 1);
  };

  const addOneAsync = () => {
    setTimeout(() => {
      setNum((n) => n + 1);
    //   setNum(num + 1);
    }, 2000);
  };
  const addOneInterval = () => {
    setInterval(() => {
      setNum((n) => n + 1);
    //   setNum(num + 1);
    }, 2000);
  };
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{num}</h1>
      <div>
        <button onClick={addOne}>addOne</button>
        <button onClick={addOneAsync}>addOneAsync</button>
        <button onClick={addOneInterval}>addOneInterval</button>

      </div>
    </div>
  );
};

export default Example;
