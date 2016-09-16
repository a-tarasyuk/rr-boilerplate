import React from 'react';
import { connect } from 'react-redux';
// import Home from 'components/home/Home.react';

//const HomeContainer = () => (
//  <Home />
//);

const Home = () => {
  return <h1></h1>;
};

Home.propTypes = {
  children: React.PropTypes.node
};

export default connect()(Home);