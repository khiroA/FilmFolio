import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import ErrorDisplay from '../components/Error/Error';
import MovieList from '../components/MovieList/MovieList';
import { 
  ENDPOINTS, 
  IMG_BASE_URL 
} from '../constants/api';

import { AiFillHeart, AiOutlineHeart, AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { AiOutlineArrowLeft } from "react-icons/ai";

import { useFavorites } from '../context/FavoritesContext';
import { useWatchlist } from '../context/WatchlistContext';
import './styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const detailsEndpoint = ENDPOINTS.movieDetails(id);
  const videosEndpoint = ENDPOINTS.movieVideos(id);
  const recEndpoint = ENDPOINTS.recommendations(id);

  const { data, loading, error } = useFetch(detailsEndpoint);
  const { data: videosData, loading: videosLoading, error: videosError } = useFetch(videosEndpoint);
  const { data: recData, loading: recLoading, error: recError } = useFetch(recEndpoint);

  const {  toggleFavorite, isFavorite } = useFavorites();
  const {  toggleWatchlist, isInWatchlist } = useWatchlist();

  

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay error={error} />;



  let trailer = null;
  if (videosData?.results) {
    trailer = videosData.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
  }
  return (
    <div className="movie-details-container">
    
      <button className="back-button" onClick={() => navigate(-1)}> <AiOutlineArrowLeft/>Back</button>

      <div className="movie-details-header">
        <div className="movie-poster">
          <img 
            src={`${IMG_BASE_URL}${data.poster_path}`} 
            alt={data.title} 
          />
        </div>
        <div className="movie-basic-info">
          <h1>{data.title}</h1>

         
          <div className="movie-actions">
            <span 
              className="icon favorite-icon"
              onClick={() => toggleFavorite(data.id)}>
              {isFavorite(data.id) ? (
                <AiFillHeart size={28} color="red" />
              ) : (
                <AiOutlineHeart size={28} color="gray" />
              )}
            </span>
            <span 
              className="icon pin-icon"
              onClick={() => toggleWatchlist(data.id)}>
              {isInWatchlist(data.id) ? (
                <AiFillPushpin size={28} color="yellow" />
              ) : (
                <AiOutlinePushpin size={28} color="gray" />
              )}
            </span>
          </div>
          <p><strong>Release:</strong> {data.release_date}</p>
          <p><strong>Runtime:</strong> {data.runtime} min</p>
          <p><strong>Genres:</strong> {data.genres.map(g => g.name).join(', ')}</p>
          <p><strong>Rating:</strong> {data.vote_average}</p>
        </div>
      </div>

      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{data.overview}</p>
      </div>

      <div className="movie-trailer">
        <h2>Trailer</h2>
        {videosLoading 
          ? <Loading /> 
          : videosError 
            ? <ErrorDisplay error={videosError} />
            : trailer ? (
              <div className="trailer-video">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p>No trailer available.</p>
            )
        }
      </div>

      {/* Recommendations Section */}
       <div className="movie-recommendations">
        <h2>Recommended</h2>
        {recLoading 
          ? <Loading /> 
          : recError 
            ? <ErrorDisplay error={recError} /> 
            : <MovieList data={recData.results} />
        }
      </div> 
    </div>
  );
};

export default MovieDetails;
