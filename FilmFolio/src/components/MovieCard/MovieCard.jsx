import React from 'react';
 import './MovieCard.css'; 


const MovieCard = ({ title, imgUrl }) => {
  return (
    <div className="movie-card">
      
      {imgUrl ? (
        
        <img src={imgUrl} alt={title} className="movie-card-image" />
      ) : (
        <div className="movie-card-placeholder">No Image Available</div>
      )}
      <p className="movie-card-title">{title}</p>
    </div>
  );
};

export default MovieCard;