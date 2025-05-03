import React, { useState, useEffect , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_MOVIE } from '../../constants/api';
import { useFetch } from '../../hooks/useFetch';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Update debouncedQuery after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setQuery('');
        setDebouncedQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  const url = debouncedQuery ? `${SEARCH_MOVIE}${encodeURIComponent(debouncedQuery)}` : null;
  
  const { data, loading, error } = useFetch(url);

  const results = debouncedQuery ? (data ? data.results : []) : [];
  
  const handleSelect = (movieId) => {
   
    navigate(`/film/${movieId}`);
    setQuery('');
    setDebouncedQuery('');
  };

return (
  <div className="search-container" ref={containerRef} >
    <input
      type="text"
      placeholder="Search movies by name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
    {loading && <div className="search-loading">Loading...</div>}
    {error && <div className="search-error">Error: {error}</div>}
    {results.length > 0 && (
      <ul className="search-results">
        {results.map((movie) => (
          <li
            key={movie.id}
            className="search-result-item"
            onClick={() => handleSelect(movie.id)}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    )}
  </div>
);

};

export default Search;
