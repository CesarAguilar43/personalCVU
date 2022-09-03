import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './config/Routes';

ReactDOM.render(
  <Routes>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Routes>,
  document.getElementById('root')
);
