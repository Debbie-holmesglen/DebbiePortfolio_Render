import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap CDN
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/main.scss"
//import "./css/main.css"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);