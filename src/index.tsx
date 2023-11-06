import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GuidebarContextProvider from './contexts/GuidebarContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GuidebarContextProvider>
      <App />
    </GuidebarContextProvider>
  </React.StrictMode>
);
