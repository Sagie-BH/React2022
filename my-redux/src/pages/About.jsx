import React from 'react'
import { useSelector } from "react-redux";

const About = () => {
    const userName = useSelector((state) => state.user.value.userName);

  return (
    <div>This Is About Page - {userName}</div>
  )
}

export default About