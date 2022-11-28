import React from "react"
import Auth from "./Auth";
import ColorContext from "./ColorContext";
import { MyAuthContext } from "./MyAuthContext";

const MyContext = () => {
    return (
      <MyAuthContext>
        <MiddleWare />
        <ColorContext.Provider>
          <MiddleWare />
        </ColorContext.Provider>
      </MyAuthContext>
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