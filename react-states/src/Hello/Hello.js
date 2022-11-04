import { helloBuilder, ageStr } from './helloLogic'
import './Hello.css'
import { useState } from 'react'

const Hello = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className={props.classCss}>
      {helloBuilder(props.name)}
      <br />
      {ageStr + props.age}
      <br />
      <h1>Change State</h1>
      {/*
      Infinite loop - fire the function immediately!
      Setting state cause rerendering
     <button onClick={setCount((c) => c + 1)}></button> 
     */}
      <button onClick={() => setCount((c) => c + 1)}>
        Add Count
      </button>
      <p>You clicked {count} times</p>
    </div>
  )
}

export default Hello