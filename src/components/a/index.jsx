import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const A = ({ href, name, title }) => (
  <a
    href={href}
    target="blank"
    title={title || name}
    className={styles.link}
  >
    { name }
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

A.defaultProps = {
  title: '',
};

export default A;
