import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './Example';
import './index.css';
import User from './User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example/>
    {/* <User/> */}
  </React.StrictMode>
);

