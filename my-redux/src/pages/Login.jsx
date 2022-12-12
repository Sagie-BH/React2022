import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../store'

const Login = () => {
  const [newUserName, setNewUserName] = useState("");
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.value.userName);

  return (
    <div>
      <h3>Login</h3>
      <h4>{newUserName}</h4>
      <input onChange={(e) => {
        setNewUserName(e.target.value)
      }}/>
      <button onClick={() => dispatch(login({userName: newUserName }))}>
        Login
      </button>
    </div>
  );
}

export default Login