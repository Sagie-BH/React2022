import { useState } from "react"
import Auth from "./Auth";
import AuthContext from "./AuthContext"


const MyContext = () => {
    const [authStatus, setAuthStatus] = useState(false);
    const login = () => {
        setAuthStatus(true);
    }
    return (
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <MiddleWare/>
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