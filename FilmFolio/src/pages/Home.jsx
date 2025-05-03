import React from 'react';
import { useFetch } from '../hooks/useFetch';
// import {MovieList} from '../components/MovieList/MovieList';
// import {Slider} from '../components/Slider/Slider';
import { ENDPOINTS } from '../constants/api';

const Home = () => {
  const trending = useFetch(ENDPOINTS.trending);
  const topRated = useFetch(ENDPOINTS.topRated);
  const upcoming = useFetch(ENDPOINTS.upcoming);
  const nowPlaying = useFetch(ENDPOINTS.nowPlaying);

  console.log(upcoming.data?.results);
  console.log(trending.data?.results);
  console.log(topRated.data?.results);
  console.log(nowPlaying.data?.results);


  return (
    <div>
      <h1>FilmFilo</h1>

    </div>
  );
};

export default Home;
