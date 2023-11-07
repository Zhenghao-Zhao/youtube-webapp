import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GuidebarContextProvider from './contexts/GuidebarContextProvider';
import TooltipContextProvider from './contexts/TooltipContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GuidebarContextProvider>
      <TooltipContextProvider>
        <App />
      </TooltipContextProvider>
    </GuidebarContextProvider>
  </React.StrictMode>
);
