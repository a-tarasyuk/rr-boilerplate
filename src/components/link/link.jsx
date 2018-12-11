import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.css';

export const Link = ({ href, name, title }) => (
  <a
    className={ styles.link }
    target={ 'blank' }
    href={ href }
    title={ title || name }
  >
    { name }
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Link.defaultProps = {
  title: '',
};

export default Link;
