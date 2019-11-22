import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Navbar.scss';

const Navbar = () => {
  return(
    <nav>
      <ul className="navbar">
        <li>
          <Link to=""><img src={require('../img/cheznestorlogo.png')} alt="main-logo"/></Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
