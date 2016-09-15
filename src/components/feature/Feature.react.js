import styles from './feature.css';
import React from 'react';

export default ({ name, url }) => {
  return <li className={ styles.feature }>
    <a 
      href={ url } 
      target="blank" 
      title={ name } 
      className={ styles.link }
    >
      { name }
    </a>
  </li>;
};