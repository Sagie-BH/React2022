import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';
import { Provider } from 'react-redux'
import { Counter } from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter/>
    </Provider>
  </React.StrictMode>
);

