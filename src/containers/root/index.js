import React from 'react';
import styles from './styles.css';
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
  children: React.PropTypes.node,
};

export default Root;