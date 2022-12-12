import React from 'react'
import { useContext } from 'react'
import { CountContext } from './CountProvider'


const CounterComp = () => {
 const count = useContext(CountContext)

  return (
    <div>
      <h2>CounterComp</h2>
      <button onClick={() => count.countDispatch({type: 'increment'}) }>+</button>
      <button onClick={() => count.countDispatch({type: 'decrement'}) }>-</button>
      <button onClick={() => count.countDispatch({type: 'reset'}) }>Reset</button>
      <button onClick={() => count.countDispatch({type: 'givemeten'}) }>Give Me Ten</button>
      <br/>
      <h4>{count.count}</h4>
    </div>
  );
}


export default CounterComp