import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import useMoviesByIds from "../hooks/useMoviesByIds";      
import usePagination from "../hooks/usePagination";
import DisplayMovies from "../components/DisplayMovies/DisplayMovies";
import "./styles/ListPages.css"

  const   Favorites = () =>  {
  const { favoriteIds, setFavoriteIds } = useFavorites();
  const { movies, loading, error }     = useMoviesByIds(favoriteIds);

  const { pageItems, page, setPage, totalPages } =
    usePagination(movies, 12);

  const handleClear = () => setFavoriteIds([]);

  return (
    
    <div className="favorites-page"> 
      <h1>Your Favorites</h1>
      <DisplayMovies
        movies={pageItems}
        loading={loading}
        error={error}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onClear={handleClear}
        clearText={"Clear Favorites"}
      />
      </div>
    
  );
}

export default Favorites;
