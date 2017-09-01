import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import NavLink from '../../components/nav-link';
import styles from './styles.css';

const Root = ({ children }) => (
  <div className={styles.root}>
    <Header>
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/features'}>Libraries/Tools</NavLink>
    </Header>

    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;

