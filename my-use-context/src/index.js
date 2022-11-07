import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContext from './AuthContext/AuthContext';
import MyContext from './AuthContext/MyContext';
import './index.css';
import WhyContext from './WhyContext/WhyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <WhyContext/>
    <AuthContext/> */}
    <MyContext/>
  </React.StrictMode>
);

