import { useState } from 'react';
import Hello from './Hello/Hello'
import HelloClass from './HelloClass/HelloClass';

const App = () => {
  const [someEvent, setSomeEvevt] = useState(true);
  const [value, someValue] = useState('Tel Aviv');

  // Long logic..... Work Work Work 
  const changeLocation = () => {
    if (value === 'Tel Aviv')
      someValue('Jerusalem');
    else
      someValue('Tel Aviv');
  }

  return (
    <div>
      <header>
        <h1>Function Component</h1>
        <Hello
          name={'Sagie'}
          age={'16'}
          classCss={someEvent ? 'silver' : 'blue'}>
        </Hello>
        <br />
        <h1>Class Component</h1>
        <HelloClass
          name={'Sagie'}
          age={'16'}
          classCss={someEvent ? 'aqua' : 'purple'}>
        </HelloClass>
        <button onClick={() => setSomeEvevt(!someEvent)}
          style={{
            width: '200px',
            height: '100px'
          }}
        >Change Color</button>
        <hr />
        <button onClick={changeLocation}
          style={{
            width: '200px',
            height: '100px'
          }}
        >Change Location</button>
        <h1>{value}</h1>
      </header>
    </div>
  );
}

export default App;
