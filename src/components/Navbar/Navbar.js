import React from 'react';
import './Navbar.sass';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to={'/'} className="nav-logo">
        <img src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png" alt="Dota 2"/>
      </NavLink>
    </nav>
  )
};
