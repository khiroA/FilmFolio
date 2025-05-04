// src/pages/Home.jsx
import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import MovieList from "../components/MovieList/MovieList";
import CategoryMovies from "../components/CategoryMovies/CategoryMovies";
import { ENDPOINTS } from "../constants/api";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [activeGenre, setActiveGenre] = useState(null);

 
  const trending = useFetch(ENDPOINTS.trending);
  const topRated = useFetch(ENDPOINTS.topRated);
  const upcoming = useFetch(ENDPOINTS.upcoming);
  const nowPlaying = useFetch(ENDPOINTS.nowPlaying);





  return (
    <div>
      <Categories
        activeGenre={activeGenre}
        onSelectGenre={(id) => setActiveGenre((prev) => (prev === id ? null : id))}
      />

      {/* If no active genres then show the default sections*/}
      {!activeGenre ? ( 
        <>
          <Slider
            title="Upcoming Movies"
            data={upcoming.data?.results}
            loading={upcoming.loading}
            error={upcoming.error}
          />
          <MovieList
            title="Trending Movies"
            data={trending.data?.results}
            loading={trending.loading}
            error={trending.error}
          />
          <MovieList
            title="Top Rated Movies"
            data={topRated.data?.results}
            loading={topRated.loading}
            error={topRated.error}
          />
          <MovieList
            title="Now Playing"
            data={nowPlaying.data?.results}
            loading={nowPlaying.loading}
            error={nowPlaying.error}
          />
        </>
      ) : (
        <CategoryMovies genreId={activeGenre} />
      )}
    </div>
  );
}
