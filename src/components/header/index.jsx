import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './styles.css';

export default () => (
  <div className={styles.header}>
    <IndexLink
      to="/"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Home
    </IndexLink>

    <Link
      to="/features"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Libraries/Tools
    </Link>
  </div>
);
