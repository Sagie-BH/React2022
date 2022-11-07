import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentsGrid from './components/Student/StudentsGrid'
import './bootstrapSolar.min.css';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://randomuser.me/api/?results=10`);
      const users = result.data.results
      setUsers(users);
    }
    fetchItems();
  },[]);

  return (
    <div className="App">
      <StudentsGrid users={users} />
    </div>
  );
}

export default App;
