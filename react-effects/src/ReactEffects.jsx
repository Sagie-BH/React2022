import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

const ReactEffects = () => {
  const [rendered, setRendered] = useState(0);
  const [infiniteRender, setInfiniteRender] = useState(0);
  const [value, setValue] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios("https://randomuser.me/api/?results=12");
      const resultUsers = await result.data.results;
      setUsers(resultUsers);
    };
    fetchUsers.myProp = "My Prop";
    fetchUsers();
    // Return from useEffect happens in end of component
    //  return alert('hi');
  }, []);
//  }, [users]); - Setting fetched data as dependency will cause a loop

    useEffect(() => {
      setRendered((r) => r + 1);
    },[value]);

  //Every render including changing state
  // Causing infinite loop
  // useEffect(() => {
  //   setInfiniteRender((r) => r + 1);
  // });

  return (
    <>
      <h1>React Effects</h1>
      <>
      <h3>UseEffect without dependencies - fires every render</h3>
      <h4>infinite useEffect rendered {infiniteRender} times - commented</h4>
      </>
      <>
      {/* <h1>Gender {users[0].gender}</h1> */}
      <h4>Empty array effect rendered {rendered} times</h4>
      </>
      <h2>State = {value.toString()}</h2>
      <button onClick={() => setValue((v) => !v)}>Change State</button>
    </>
  );
};

export default ReactEffects;

