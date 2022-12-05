import { useCallback } from 'react';
import { useState, useMemo, memo } from 'react'
import './App.css';

const Child = ({ params, onClick }) => {
  console.log("Child Two rendered");
  return (
    <div
      style={{
        margin: "5px",
        width: 100,
        height: 70,
        background: params.color,
      }}
      onClick={onClick}
    ></div>
  );
};

const MemoChild = memo(Child);

const AppUseCallback = () => {
  const [renderIndex, setRenderIndex] = useState(0);
  const [color, setColor] = useState('green');

  console.log('App rendered: ' + renderIndex);

 const params = useMemo(() => ( { color } ), [color]);

const onClick = useCallback(() => {
    // long Process 
}, []);

  return (
    <div className="App">
      <h2>React useCallback</h2>
      <div>
        <button onClick={() => setRenderIndex(renderIndex + 1)}>
          Re-Render App
        </button>
      </div>
      <MemoChild params={ params } onClick={onClick}  />

      {/* <Child params={ params } /> */}
      <div>
        <button onClick={() => setColor(color === "green" ? "blue" : "green")}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default AppUseCallback;
