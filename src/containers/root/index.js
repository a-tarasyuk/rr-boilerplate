import styles from './styles.css';
import React, { PropTypes } from 'react';
import Header from 'components/header';

const Root = ({ children }) => (
  <div className={ styles.root }>
    <Header />

    <div className={ styles.content }>
      { children }
    </div>
  </div>
);

Root.propTypes = {
  children: PropTypes.node
};

export default Root;