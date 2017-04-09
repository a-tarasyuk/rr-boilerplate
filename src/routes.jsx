import { Route } from 'react-router-dom';
import React from 'react';
import Root from './containers/root';
import Home from './containers/home';
import Features from './containers/features';

export default () => (
  <Root>
    <Route path="/" exact component={Home} />
    <Route path="/features" component={Features} />
  </Root>
);
