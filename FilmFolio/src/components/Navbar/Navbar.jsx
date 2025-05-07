import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Search from '../Search/Search';
import { useFavorites } from '../../context/FavoritesContext';
import { useWatchlist } from '../../context/WatchlistContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { favoriteIds } = useFavorites();
  const {watchlistIds} = useWatchlist();
  const pinnedCount= watchlistIds.length;
  const favCount = favoriteIds.length;

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newThemeIsDark = !prev;
      if (newThemeIsDark) {
        document.documentElement.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
      }
      return newThemeIsDark;
    });
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-top">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo-link">
          FilmFolio
        </NavLink>
      </div>
      
        <div className="nav-controls">
          
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaSun size={20} color='yellow' /> : <FaMoon size={20} />}
          </button>
         
          <button className="burger-menu" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
         </div>

      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
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
            ExploreAI
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
