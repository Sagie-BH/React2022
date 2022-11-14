import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'
import Replay from './Replay'

const Auth = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      Auth
      <button onClick={auth.login}>Login</button>
      <Replay />
    </div>
  );
};

export default Auth