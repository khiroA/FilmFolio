const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const ENDPOINTS = {
  trending: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
};

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export { ENDPOINTS, IMG_BASE_URL };
