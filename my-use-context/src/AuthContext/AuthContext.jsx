import React from 'react'

const AuthContext = React.createContext({
    status: null,
    login: () => { },
    tokken: ''
  })
  

export default AuthContext