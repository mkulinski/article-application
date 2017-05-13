import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../styles/nav.scss';


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
