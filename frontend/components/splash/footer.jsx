import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="footer-container">
      <Link to='/photos'>About</Link>
      <Link to='/photos'>Jobs</Link>
      <Link to='/photos'>Blog</Link>
      <Link to='/photos'>Developers</Link>
      <Link to='/photos'>Guidelines</Link>
      <Link to='/photos'>Privacy</Link>
      <Link to='/photos'>Terms</Link>
      <Link to='/photos'>Help</Link>
      <Link to='/photos'>Help Forum</Link>
      <Link to='/photos'>English</Link>
    </div>
  )
}

export default Footer;