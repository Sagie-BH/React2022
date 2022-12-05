import React, { memo } from "react";

const ReactMemoChild = (props) => {
  console.log("Child Rendered");

  const changeNumber = () => {
    props.changeNumber(Math.floor(Math.random() * 100))
  }
  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Change Child Number</button>
    </div>
  );
};

export default memo(ReactMemoChild);
