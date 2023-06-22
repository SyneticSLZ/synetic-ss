import React from 'react';
import ReactDOM from 'react-dom/client';
import MouseContextProvider from "./context/mouse-context";
import { ContextProvider } from './context/contextProvider';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <ContextProvider>
        <App />
        </ContextProvider>
    
    </MouseContextProvider>
  </React.StrictMode>

);

