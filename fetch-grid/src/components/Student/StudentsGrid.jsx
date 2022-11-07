import React from "react";
import Student from "./Student";

const StudentsGrid = ({ users }) => {
  return (
    <div className="container">
      {console.log(users)}
      {users.map(user => (
        <Student
          className=""
          key={user.id.value + Math.random * 10}
          user={user}
        />
      ))} 
    </div>
  );
};

export default StudentsGrid;
