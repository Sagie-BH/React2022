import React, { useState } from "react";
import AuthContext from "./AuthContext";



export const MyAuthContext = ({ children }) => {
  
  const [authStatus, setAuthStatus] = useState(false);
  const login = () => {
    // Validation process
    ///
    setAuthStatus(true);
  };

  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
