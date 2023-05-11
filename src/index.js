import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //note: strictnode renders code twice..
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
