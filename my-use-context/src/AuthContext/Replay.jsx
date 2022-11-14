import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext';


const Replay = () => {
    const auth = useContext(AuthContext);
  return (
    <div>
    {auth.status ?
        <p>Yes you are</p>
        :
        <p>Nopes</p>
    }
</div>
  )
}

export default Replay