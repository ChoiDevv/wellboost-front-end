import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import log from './util/logger.js';

log.info('Application starting...'); // 앱 시작 로그

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);