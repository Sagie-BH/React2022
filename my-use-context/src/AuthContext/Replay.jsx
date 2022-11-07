import React from 'react'
import { useContext } from 'react'

const Replay = () => {
    const auth = useContext(AudioContext);
  return (
    <div>
        {auth?.status ?
         <h1>Welcome </h1> :
         <h1>Not Authorized</h1>
        }
    </div>
  )
}

export default Replay