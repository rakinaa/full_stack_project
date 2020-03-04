import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const NavBar = () => {
  return (
    <nav className="nav-main">
      <Link className="nav-logo link-white" to="/">Pictr</Link>
      <GreetingContainer />
    </nav>
  )
}

export default NavBar;