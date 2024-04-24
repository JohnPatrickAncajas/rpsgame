// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar">
      <Link to="/">Rock Paper Scissor Game</Link>
    </nav>
  );
}

export default Navbar;
