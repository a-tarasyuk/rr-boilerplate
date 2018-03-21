import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styles from './styles.css';

const NavLink = ({ children, href }) => (
  <Link
    activeClassName={styles['nav-link_active']}
    className={styles['nav-link']}
    to={href}
    exact
  >
    { children }
  </Link>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
