import { useState, memo } from 'react'
import './App.css';
import Child from './Child';

const ChildTwo = ({ params }) => {
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

const MemoChildTwo = memo(ChildTwo, (prevProps, newProps) => {
  return prevProps.params.color === newProps.params.color
});

const MemoChildThree = memo(ChildTwo);


const App = () => {
  const [renderIndex, setRenderIndex] = useState(0);
  const [color, setColor] = useState('green');

  console.log('App rendered: ' + renderIndex);



  return (
    <div className="App">
      <h2>React.Memo</h2>
      <div>
        <button onClick={() => setRenderIndex(renderIndex + 1)}>
          Re-Render App
        </button>
      </div>
      {/* <Child params={{color}}/> */}
      <MemoChildTwo params={{ color }} />
      <div>
        <button onClick={() => setColor(color === 'green' ? 'blue' : 'green')}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
