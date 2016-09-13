import 'styles/main.css';
import React from 'react';
import Header from 'components/header/Header.react';

export default ({ children }) => (
  <div className="page">
    <Header />

    <div className="page__content">
      { children }
    </div>
  </div>
);