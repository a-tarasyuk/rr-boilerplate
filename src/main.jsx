import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/root';
import configureStore from './store';
import INITIAL_STATE from './data';
import './assets/styles/main.css';

const history = createBrowserHistory();
const store = configureStore(INITIAL_STATE, history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept('./containers/root', () => render(RootContainer));
}
