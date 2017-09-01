import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import { store, history } from './store';
import './assets/styles/main.css';

export const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>
);

if (!module.hot) {
  ReactDOM.render(
    <App
      store={store}
      history={history}
    />,
    document.getElementById('root'),
  );
}
