import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RefState from './RefState/RefState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefState age={34} city={'RamatGan'}/>
  </React.StrictMode>
);


