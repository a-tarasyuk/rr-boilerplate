import { Route } from 'react-router-dom';
import React from 'react';
import { Features } from '../features';
import { NavLink } from '../../components/nav-link';
import { Header } from '../../components/header';
import { Home } from '../home';
import styles from './root.css';

export const Root = () => (
  <div className={styles.root}>
    <Header>
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/features'}>Libraries/Tools</NavLink>
    </Header>

    <div className={styles.content}>
      <Route path={'/'} exact component={Home} />
      <Route path={'/features'} component={Features} />
    </div>
  </div>
);

export default Root;
