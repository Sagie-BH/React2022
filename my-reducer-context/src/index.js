import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterComp from './CounterComp';
import { CountProvider } from './CountProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CountProvider>

      <CounterComp/>

    </CountProvider>

  </React.StrictMode>
);

