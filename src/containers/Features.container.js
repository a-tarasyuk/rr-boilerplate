import React from 'react';
import { connect } from 'react-redux';
import Features from 'components/features/Features.react';

const FeaturesContainer= (props) => (
  <Features {...props} />
);

export default connect(
  ({ features }) => ({ features })
)(FeaturesContainer);