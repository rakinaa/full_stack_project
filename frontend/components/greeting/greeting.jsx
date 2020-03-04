import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="nav-auth">
      <a className="nav-login link-white" onClick={() => openModal('login')}>Log In</a>
      <a className="nav-signup" onClick={() => openModal('signup')}>Sign Up</a>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="nav-auth">
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return (
    currentUser ?
    personalGreeting(logout) :
    sessionLinks()
  );
};

export default Greeting;