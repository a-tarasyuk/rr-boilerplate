import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import Store from './store';

ReactDOM.render(
  <Provider store={ Store() }>
    <App />
  </Provider>,
  document.getElementById('root')
);