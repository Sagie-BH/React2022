import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userName = useSelector((state) => state.user.value.userName);
  return (
    <div>
      <h2>{userName}</h2>
      <h3>This Is Home Page</h3>
    </div>
  );
};

export default Home;
