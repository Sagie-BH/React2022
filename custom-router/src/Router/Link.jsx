import React from "react";
import { useContext } from "react";
import { RouterContext, history } from "./RouterContext";

const Link = ({ to, children, onClick, ...props }) => {
  const { route } = useContext(RouterContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (route.path === to) {
      return;
    }
      if(onClick){
        onClick(e)
      }
      history.push(to);
  }
  return (
    <div>
      <a {...props} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
