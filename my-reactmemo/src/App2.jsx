import { useState, useMemo, memo } from 'react'
import './App.css';

const Child = ({ params }) => {
  console.log('Child Two rendered');
  return (
    <div style={{
      margin: '5px',
      width: 100,
      height: 70,
      background: params.color
    }}></div>
  );
};

const MemoChild = memo(Child);

const AppUseMemo = () => {
  const [renderIndex, setRenderIndex] = useState(0);
  const [color, setColor] = useState('green');

  console.log('App rendered: ' + renderIndex);

 const params = useMemo(() => ( { color } ), [color])

  return (
    <div className="App">
      <h2>React useMemo</h2>
      <div>
        <button onClick={() => setRenderIndex(renderIndex + 1)}>
          Re-Render App
        </button>
      </div>
      <MemoChild params={ params } />

      {/* <Child params={ params } /> */}
      <div>
        <button onClick={() => setColor(color === "green" ? "blue" : "green")}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default AppUseMemo;
