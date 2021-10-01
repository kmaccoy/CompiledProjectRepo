import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className="navLink" to="/"> HOME </NavLink>
      </nav>
    </div>
  )
}

export default NavBar;