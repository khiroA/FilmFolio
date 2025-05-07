import { useState, useEffect } from "react";
import { ENDPOINTS } from "../constants/api";

const useMoviesByIds = (ids) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ids.length === 0) {
      setMovies([]);
      return;
    }
    setError(null);

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const moviesData = await Promise.all(
          ids.map(async (id) => {
            const response = await fetch(ENDPOINTS.movieDetails(id));
            if (!response.ok) {
              throw new Error(`Request failed : ${response.status}`);
            }
            return await response.json();
          }),
        );
        setMovies(moviesData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [ids.join(",")]);

  return { movies, loading, error };
};

export default useMoviesByIds;
