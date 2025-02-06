import React from 'react';
import { Link } from 'react-scroll';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="brand">HONG HYEONSEO</li>
        <li className="nav-item"><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="nav-item"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="nav-item"><Link to="portfolio1" smooth={true} duration={500}>Portfolio 1</Link></li>
        <li className="nav-item"><Link to="portfolio2" smooth={true} duration={500}>Portfolio 2</Link></li>
        <li className="nav-item"><Link to="portfolio3" smooth={true} duration={500}>Portfolio 3</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation; 