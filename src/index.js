import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import StoreProvider from './redux/store';
import './index.css';
import "antd/dist/reset.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>
);