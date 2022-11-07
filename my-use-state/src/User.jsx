import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const User = () => {
    const [user, setUser] = useState({});
    
    // const [user, setUser] = useState({
    //     name: "sagie"
    // });

    useEffect(() => {
        const newUser = {
            name: "sagie"
        }
        setTimeout(() => {
            setUser(newUser)
        }, 1500)
    },[])

  return (
    <div>
      <h1>User Example</h1>
      <h3>User Name: {user.name}</h3>
      {/* <h3>User Name: {user?.name}</h3>
      {user && <h3>User Name: {user.name}</h3>} */}
    </div>
  );
}

export default User