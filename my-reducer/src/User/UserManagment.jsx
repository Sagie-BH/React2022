import React from "react";
import { useReducer, useRef } from "react";
import { userReducer, userState } from "./UserReducer";

const UserManagment = () => {
  const [state, dispatch] = useReducer(userReducer, userState);

  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_USER",
      name: nameRef.current.value,
      id: state.users.length + 1,
    });
  };
  return (
    <div>
      <h2>UserManagment</h2>
      <h4>Users Count {state.users.length}</h4>
      <form>
        <input ref={nameRef} />
        <button onClick={handleSubmit}>Add User</button>
      </form>

      { state.users.map((userData) => (
        <li
          key={userData.id}
          onClick={() => dispatch({ type: "REMOVE_USER", id: userData.id })}
        >
          {userData.name}
        </li>
      ))}
    </div>
  );
};

export default UserManagment;
