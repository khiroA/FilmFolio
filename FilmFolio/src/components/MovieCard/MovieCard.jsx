import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import { useWatchlist } from '../../context/WatchlistContext';
import { AiFillHeart, AiOutlineHeart, AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import './MovieCard.css';

const MovieCard = ({ id, title, imgUrl }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();

  const fav = isFavorite(id);
  const pinned = isInWatchlist(id);

  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-icons">
        <span
          className="icon favorite-icon"
          onClick={(e) => { e.preventDefault(); toggleFavorite(id); }}
        >
          {fav ? (
              <AiFillHeart size={24} color="red" />
            ) : (
              <AiOutlineHeart size={24} color="gray"  />
            )}
        </span>
        <span
          className="icon pin-icon"
          onClick={(e) => { e.preventDefault(); toggleWatchlist(id); }}
        >
          {pinned ? (<AiFillPushpin  size={24} color="yellow" />) : (<AiOutlinePushpin  size={24} color="gray" />)}
        </span>
      </div>

      <Link to={`/film/${id}`} className="movie-card-link">
        <div className="movie-card">
          {imgUrl ? (
            <img src={imgUrl} alt={title} className="movie-card-image" />
          ) : (
            <div className="movie-card-placeholder">No Image Available</div>
          )}
          <p className="movie-card-title">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
