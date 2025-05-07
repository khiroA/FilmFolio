import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import useMoviesByIds from "../hooks/useMoviesByIds";
import usePagination from "../hooks/usePagination";
import DisplayMovies from "../components/DisplayMovies/DisplayMovies";
import "./styles/ListPages.css";

const Watchlist = () => {
  const { watchlistIds, setWatchlistIds } = useWatchlist();
  const { movies, loading, error } = useMoviesByIds(watchlistIds);

  const { pageItems, page, setPage, totalPages } = usePagination(movies, 12);

  const handleClear = () => setWatchlistIds([]);

  return (
    <div className="watchlist-page">
      <h1>Your Watchlist</h1>
      <DisplayMovies
        movies={pageItems}
        loading={loading}
        error={error}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onClear={handleClear}
        clearText={"Clear Watchlist"}
      />
    </div>
  );
};

export default Watchlist;
