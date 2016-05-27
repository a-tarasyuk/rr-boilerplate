import React from 'react';
import { connect } from 'react-redux';
import Home from 'components/home/Home.react';

const HomeContainer = () => (
  <Home />
);

export default connect()(HomeContainer);