import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { applyMode, applyTheme, Mode, Theme } from '@cloudscape-design/global-styles';
import App from './App';
import './index.css';

// Apply Cloudscape Dark Mode & Visual Refresh Theme globally
applyMode(Mode.Dark);
applyTheme(Theme.VisualRefresh);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
