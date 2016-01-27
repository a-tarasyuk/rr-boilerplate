import './features.scss';
import React from 'react';
import Feature from 'components/feature/Feature.react';

export default ({ features }) => {
  return <div className="features">
    <h1 className="features__title">Boilerplate contains</h1>
    <ul className="features__list">
      { features.map((feature, index) => <Feature key={ index } { ...feature } />) }
    </ul>
  </div>;
};