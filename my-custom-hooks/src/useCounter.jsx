import { useState } from 'react'

const useCounter = (initialValue = 0, step = 1) => {
    
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(pervCount => pervCount + step);

    const decrement = () => setCount(pervCount => pervCount - step);

    const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset]
}

export default useCounter