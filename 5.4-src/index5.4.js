import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const A = createRoot(container);
A.render(<App tab="home" />);


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/