import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import { BrowserRouter } from 'react-router-dom';

const enableMocking = async () => {
  const { worker } = await import('./mocs/browser');

  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Theme preset={presetGpnDark}>
          <App />
        </Theme>
      </BrowserRouter>
    </React.StrictMode>
  );
});
