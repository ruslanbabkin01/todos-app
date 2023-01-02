import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper green darken-13 px1">
        <NavLink to="/" className="brand-logo">
          Logo
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
