import React, { useEffect } from 'react'
import { useState } from 'react';

const AdvEffects = () => {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState("");
  const [grade, setGrade] = useState(0);

  // Wrong
  // useEffect(() => {
  //   console.count("useEffect runs!");
  //   document.title = `You Clicked ${number} Times`;
  // },[]);

  useEffect(() => {
    /// Working - getting user
    setUser()
  },[]);

  useEffect(() => {
    /// Working - getting user grade
    setGrade()
  },[user, number]);


  // Correct
  useEffect(() => {
    console.count("useEffect runs!");
    document.title = `You Clicked ${number} Times`;
  },[number]);


  // Wrong
  // useEffect(() => {
  //   document.title = `Increased ${number} Times`;
  //   const interval = setInterval(() => {
  //     setNumber(number + 1);
  //   }, [1000]);

  // }, [number]);


  // Correct
  useEffect(() => {
    document.title = `Increased ${number} Times`;
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, [1000]);
    // Clean-up
    return clearInterval(interval)
  }, []);


  return (
    <div>
      <h1>AdEffects</h1>
      {/* <span>You clicked {number} times</span> */}
      <span>Increased {number} Times</span>
      <br/>
      <button 
      onClick={() => setNumber((prev) => prev + 1)}>
        Increase</button>
    </div>
  );
};

export default AdvEffects