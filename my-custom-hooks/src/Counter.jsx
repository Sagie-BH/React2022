import React from 'react'
import { useEffect } from 'react';
import useCounter from './useCounter'

let firstLoad = true

const Counter = () => {
    console.log("Mount")
    const [count, increment, decrement, reset] = useCounter(10, 10);
    const [countTwo, incrementTwo, decrementTwo, resetTwo] = useCounter(1, 1);
    useEffect(() => {
        if(firstLoad){
            firstLoad = false;
            return console.log('unMount')
        }
    },[])
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <h2>Count Two = {countTwo}</h2>
        <button onClick={incrementTwo}>+</button>
        <button onClick={decrementTwo}>-</button>
        <button onClick={resetTwo}>Reset</button>

        <div className='test'></div>
        <div className='testbody'></div>
        <div className='testFooter'></div>

    </div>
  )
}

export default Counter