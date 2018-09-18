import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

export const Header = ({ children }) => (
  <div className={styles.header}>
    { children }
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
