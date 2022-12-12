import React, { useReducer } from 'react';


export const CountContext = React.createContext();

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
      case "givemeten":
        return 10;
    default:
      throw new Error();
  }
}

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count: count, countDispatch: dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

