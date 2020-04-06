import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
