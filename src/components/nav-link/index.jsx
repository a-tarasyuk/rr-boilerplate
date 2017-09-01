import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styles from './styles.css';

const NavLink = ({ children, href }) => (
  <Link
    to={href}
    exact
    className={styles['nav-link']}
    activeClassName={styles['nav-link_active']}
  >
    { children }
  </Link>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
