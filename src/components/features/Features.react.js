import './features.scss';
import React from 'react';
import Feature from 'components/feature/Feature.react';

export default ({ features }) => {
  return <div className="features">
    <ol className="features__list">
      { features.map((feature, index) => <Feature key={ index } { ...feature } />) }
    </ol>
  </div>;
};