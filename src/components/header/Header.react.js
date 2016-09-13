import './header.css';
import { Link, IndexLink } from 'react-router';
import React from 'react';

export default () => {
  return <div className="header">
    <IndexLink
      to="/"
      className="header__link"
      activeClassName="header__link_active"
    >
      Home
    </IndexLink>

    <Link
      to="/features"
      className="header__link"
      activeClassName="header__link_active"
    >
      Libraries/Tools
    </Link>
  </div>;
};