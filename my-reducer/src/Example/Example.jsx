import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Example = () => {
  const submitHandler = useCallback(() => {
    console.log("Tracking Input");
  });

  const submitHandlerTwo = () => {
    console.log("Tracking Input");
  }
  const [clickCount, setClickCount] = useState(0);
  console.log(clickCount);

  useEffect(() => {
    if (clickCount > 0) {
        submitHandler();
    }
  },[clickCount, submitHandler]);

  return (
    <div>
      <h3>Example</h3>
      <button onClick={() => setClickCount((c) => c + 1)}>Click Me</button>
      <br/>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Example;
