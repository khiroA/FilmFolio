import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";
import { IMG_BASE_URL } from "../../constants/api";
import Loading from "../Loading/Loading";
import ErrorDisplay from "../Error/Error";
import "./DisplayMovies.css";

const DisplayMovies = ({
  movies,
  loading,
  error,
  page,
  totalPages,
  onPageChange,
  onClear,
  clearText = "Clear All",
}) => {
  if (loading) return <Loading />;
  if (error) return <ErrorDisplay error={error.message} />;
  if (movies.length === 0) return <p>No movies to display.</p>;
  return (
    <div className="display-movies">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
            imgUrl={
              movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : null
            }
          />
        ))}
      </div>
      <div className="display-movies-footer">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        {onClear && (
          <button onClick={onClear} className="clear-button">
            {clearText}
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayMovies;
