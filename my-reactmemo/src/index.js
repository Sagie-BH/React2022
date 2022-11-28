import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppUseMemo from './App2';
import AppUseCallback from './App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <AppUseMemo /> */}
    <AppUseCallback />
  </>
);

