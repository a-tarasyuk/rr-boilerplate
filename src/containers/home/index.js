import styles from './styles.css';
import React from 'react';

const Home = () => {
  return <div className={ styles.home }>
    <h1 className={ styles.title }>rr-boilerplate</h1>
    <p className={ styles.description }>Lightweight React&Redux boilerplate</p>
  </div>;
};

export default Home;