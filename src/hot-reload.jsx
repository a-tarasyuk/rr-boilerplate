import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';
import { store, history } from './store';

const render = (store, history) => {
  console.log('yyy', store.getState());

  ReactDOM.render(
    <AppContainer>
      <App
        store={store}
        history={history}
      />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(store, history);

module.hot.accept('./app', () => render(store, history));
// module.hot.accept('./reducers', () => {
//   console.log(store.getState());
// });
