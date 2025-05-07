import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_MOVIE, IMG_BASE_URL } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import Loading from "../Loading/Loading";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Update debouncedQuery after the user stops typing
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const url = debouncedQuery
    ? `${SEARCH_MOVIE}${encodeURIComponent(debouncedQuery)}`
    : null;

  const { data, loading, error } = useFetch(url);

  const results = debouncedQuery ? (data ? data.results : []) : [];

  const handleSelect = (movieId) => {
    navigate(`/film/${movieId}`);
    setQuery("");
  };

  return (
    <div className="search-container" ref={containerRef}>
      <input
        name="search"
        type="text"
        placeholder="Search movies by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {loading && (
        <div className="search-loading"> {<Loading size={16} />}</div>
      )}
      {error && <div className="search-error">Error: {error}</div>}
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((movie) => (
            <li
              key={movie.id}
              className="search-result-item"
              onClick={() => handleSelect(movie.id)}
            >
              {movie.poster_path && (
                <img
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="search-result-img"
                />
              )}
              <span className="search-result-title">{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
