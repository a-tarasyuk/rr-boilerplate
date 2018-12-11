import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../components/link';
import styles from './features.css';

export const Features = ({ features }) => {
  features = features.map((feature, index) => (
    <li className={ styles.feature } key={ index }>
      <Link { ...feature } />
    </li>
  ));

  return (
    <ol className={ styles.features }>
      { features }
    </ol>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Features;
