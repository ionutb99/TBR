import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/intrebari">Intrebari</Link></li>
        <li><Link to="/despre">Despre</Link></li>
        <li><Link to="/maps">Maps</Link></li>
        <li><Link to="/propuneri">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
