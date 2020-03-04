import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SearhBar from './searchbar';

const NavBar = () => {
  return (
    <nav className="nav-main">
      <Link className="nav-logo link-white" to="/">Pictr</Link>
      <div className="nav-right">
        <SearhBar />
        <GreetingContainer />
      </div>
    </nav>
  )
}

export default NavBar;