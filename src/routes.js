import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Root from './containers/Root';
import Home from './containers/home/Home.container';
import Features from './containers/features/Features.container';

export default (
  <Route path="/" component={ Root }>
    <IndexRoute component={ Home } />
    <Route path="features" component={ Features } />
  </Route>
);