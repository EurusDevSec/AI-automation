import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { applyMode, applyDensity, applyTheme, Mode, Density, Theme } from '@cloudscape-design/global-styles';
import App from './App';
import './index.css';

// Apply Cloudscape Light Mode, Comfortable Density & Visual Refresh Theme
applyMode(Mode.Light);
applyDensity(Density.Comfortable);
applyTheme(Theme.VisualRefresh);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
