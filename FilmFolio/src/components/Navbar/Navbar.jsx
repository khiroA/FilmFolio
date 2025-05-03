import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo-link">
          FilmFolio
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/explore"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Watchlist
          </NavLink>
        </li>
      </ul>
      <Search/>
    </nav>
  );
};

export default Navbar;
