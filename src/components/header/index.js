import styles from './styles.css';
import { Link, IndexLink } from 'react-router';
import React from 'react';

export default () => {
  return <div className={ styles.header }>
    <IndexLink
      to="/"
      className={ styles.link }
      activeClassName={ styles.link_active }
    >
      Home
    </IndexLink>

    <Link
      to="/features"
      className={ styles.link }
      activeClassName={ styles.link_active }
    >
      Libraries/Tools
    </Link>
  </div>;
};