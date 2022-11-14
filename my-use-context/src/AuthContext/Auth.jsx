import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import AuthContext from './AuthContext'
import ColorContext from './ColorContext';
import Replay from './Replay'

const Auth = () => {
  const auth = useContext(AuthContext);
  const color = useContext(ColorContext);

  useEffect(() => {

  },[])

  return (
    <div>
      Auth
      <button  onClick={auth.login}>Login</button>
      <Replay />
    </div>
  );
};

export default Auth