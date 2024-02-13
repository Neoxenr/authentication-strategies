import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme preset={presetGpnDark}>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
