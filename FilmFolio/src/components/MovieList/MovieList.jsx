import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { IMG_BASE_URL } from '../../constants/api';
import Loading from '../Loading/Loading';
import "./MovieList.css"


const MovieList = ({ title, data, loading, error }) => {

  if (error) return  <Error error={error} /> ; // err rendering problem here 

  return ( 
    < section className="movie-list-section">
    
      {loading && <Loading/>}
      <h2>{title}</h2>
      <div className="movie-list-container">
        {data && data.map(movie => (
          <MovieCard 
            key={movie.id} 
            title={movie.title} 
            imgUrl={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : null} 
          />
        ))}
      </div>
    </section> 
  );
};

export default MovieList;
