import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/root';
import Home from './containers/home';
import Features from './containers/features';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="features" component={Features} />
  </Route>
);
