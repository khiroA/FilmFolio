import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Movie App</p>
        <ul className="footer-links">
          <li>
            <NavLink 
              to="/" 
              end
              
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/explore"
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/favorites" 
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/watchlist" 
            >
              Watchlist
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
