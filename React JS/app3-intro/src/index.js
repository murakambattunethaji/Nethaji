import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Info from './Info';
import Sample from './Sample';
import Nesha from './Nesha'
import Siva from "./Siva"
import Hello from "./Hello"
import Project from "./Project"
import A from "./A"
import C from "./C"

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <C/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
