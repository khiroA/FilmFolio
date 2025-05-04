import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Search from '../Search/Search';
import { useFavorites } from '../../context/FavoritesContext';
import { useWatchlist } from '../../context/WatchlistContext';
const Navbar = () => {
  const { favoriteIds } = useFavorites();
  const {watchlistIds} = useWatchlist();
  const pinnedCount= watchlistIds.length;
  const favCount = favoriteIds.length;
  
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
            className={({ isActive }) =>isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/explore"
            className={({ isActive }) =>isActive ? "active-link" : ""}>
            Explore
          </NavLink>
        </li>
        <li>
        <NavLink 
            to="/favorites"
            className={({ isActive }) => isActive ? "active-link" : ""}>
            Favorites
            {favCount > 0 && (                   
            <span className="nav-badge">{favCount}</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/watchlist"
            className={({ isActive }) =>isActive ? "active-link" : ""}>
            Watchlist
            {pinnedCount > 0 && ( <span className='nav-badge'>{pinnedCount} </span> )}
          </NavLink>
        </li>
      </ul>
      <Search/>
    </nav>
  );
};

export default Navbar;
