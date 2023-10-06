import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './view/Login.tsx';

import './assets/styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
