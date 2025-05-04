import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart, AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import './MovieCard.css';

const MovieCard = ({ id, title, imgUrl }) => {
  const [isFav, setIsFav]     = useState(false);
  const [isPinned, setPinned] = useState(false);

  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-icons">
        <span
          className="icon favorite-icon"
          onClick={(e) => { e.preventDefault(); setIsFav(!isFav); }}
        >
          {isFav ?(
              <AiFillHeart size={24} color="red" />
            ) : (
              <AiOutlineHeart size={24} color="gray"  />
            )}
        </span>
        <span
          className="icon pin-icon"
          onClick={(e) => { e.preventDefault(); setPinned(!isPinned); }}
        >
          {isPinned ? (<AiFillPushpin  size={24} color="yellow" />) : (<AiOutlinePushpin  size={24} color="gray" />)}
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
