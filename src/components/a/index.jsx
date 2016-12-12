import React, { PropTypes } from 'react';
import styles from './styles.css';

const A = ({ href, name, title = '' }) => (
  <a
    href={href}
    target="blank"
    title={title || name}
    className={styles.link}
  >
    {name}
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default A;
