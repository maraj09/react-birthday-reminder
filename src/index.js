import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <p className="text-3xl text-center mt-5 text-white">{`React {UseState} Practice`}</p>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


