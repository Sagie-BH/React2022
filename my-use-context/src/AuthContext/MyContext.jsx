import React, { useState } from "react"
import { useEffect } from "react";
import Auth from "./Auth";
import AuthContext from "./AuthContext";
import ColorContext from "./ColorContext";
const MyContext = () => {
    const [authStatus, setAuthStatus] = useState(false);

    const login = () => {
      // Validation process
        setAuthStatus(true);
    }

    return (
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <MiddleWare />
        <ColorContext.Provider>
          <MiddleWare />
        </ColorContext.Provider>
      </AuthContext.Provider>
    );
  }
  
  export default MyContext


  const MiddleWare = () => {
    return (
        <div>
            <Auth/>
        </div>

      );
  }