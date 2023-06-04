import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const dotenv = require('dotenv');
dotenv.config();
const val = process.env.USER_NAME;
console.log(val);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

