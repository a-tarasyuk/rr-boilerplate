import React from 'react';
import styles from './styles';

const A = ({ url, name, title = '' }) => (
  <a href={ href } target="blank" title={ title } className={ styles.link }>
    { name }
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export A;