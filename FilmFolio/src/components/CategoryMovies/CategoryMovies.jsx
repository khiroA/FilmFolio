import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ENDPOINTS } from "../../constants/api";
import Loading from "../Loading/Loading";
import ErrorDisplay from "../Error/Error";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";
import { IMG_BASE_URL } from "../../constants/api";
import "./CategoryMovies.css";

export default function CategoryMovies({ genreId }) {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(
    ENDPOINTS.moviesByGenre(genreId, page)
  );

  useEffect(() => {
    setPage(1); // reset to page 1 when genre changes
  }, [genreId]);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay error={error} />;



  return (
    <div className="category-movies">
      <div className="movies-grid">
        {data.results?.map((movie) => (
         <MovieCard
         key={movie.id}
         title={movie.title}
         id={movie.id}
         imgUrl={
           movie.poster_path
             ? `${IMG_BASE_URL}${movie.poster_path}`
             : null }
       />

        ))}
      </div>
      <Pagination
        page={page}
        totalPages={data.total_pages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
