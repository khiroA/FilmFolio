import React from 'react';
import { useFetch } from '../hooks/useFetch';
import MovieList from '../components/MovieList/MovieList';
import Slider from '../components/Slider/Slider';
import { ENDPOINTS } from '../constants/api';
import Categories from '../components/Categories/Categories';

const Home = () => {
  const trending = useFetch(ENDPOINTS.trending);
  const topRated = useFetch(ENDPOINTS.topRated);
  const upcoming = useFetch(ENDPOINTS.upcoming);
  const nowPlaying = useFetch(ENDPOINTS.nowPlaying);



  return (
    <div>
      < Categories
       />

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
        title="Now Playing Movies" 
        data={nowPlaying.data?.results} 
        loading={nowPlaying.loading} 
        error={nowPlaying.error} 
      />
    </div>
  );
};

export default Home;
