import styles from './styles.css';
import React, { PropTypes } from 'react';
import A from 'components/a';
import { connect } from 'react-redux';

const Features = ({ features }) => {
  features = features.map((feature, index) => {
    return <li className={ styles.feature } key={ index }>
      <A {...feature} />
    </li>;
  });

  return <ol className={ styles.features }>
    { features }
  </ol>;
};

Features.propTypes = {
  features: PropTypes.array.isRequired
};

export default connect(
  ({ features }) => ({ features })
)(Features);