import React from 'react';
import ReactDOM from 'react-dom/client';
import AdvEffects from './AdvEffects/AdvEffects';
import FetchEffect from './FetchEffect/FetchEffect';
import './index.css';
// import ReactEffects from './ReactEffects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactEffects/> */}
    {/* <AdvEffects/> */}
    <FetchEffect/>
  </React.StrictMode>
);


