import './feature.css';
import React from 'react';

export default ({ name, url }) => {
  return <li className="feature">
    <a href={ url } target="blank" title={ name } className="feature__link">{ name }</a>
  </li>;
};