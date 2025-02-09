import React from 'react';
import { Link } from 'react-scroll';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="brand">HONG HYEONSEO</li>
        <li className="nav-item"><a href="#home">HOME</a></li>
        <li className="nav-item"><a href="#about">ABOUT</a></li>
        <li className="nav-item"><a href="#portfolio1">PROJECT</a></li>
      </ul>
    </nav>
  );
}

export default Navigation; 