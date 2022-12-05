import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import UserManagment from './User/UserManagment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App />
    <hr/>
    <Counter/> */}
    {/* <Counter2 /> */}
    {/* <Counter3/> */}
    <UserManagment/>
  </>

);

