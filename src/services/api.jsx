import axios from 'axios';

const MAIN_URL = process.env.REACT_APP_MAIN_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchTrends = async (page, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=${lang}&page=${page}`
  );
  return response.data;
};

const fetchMovieById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchReviewsById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${lang}&page=1`
  );
  return response.data;
};

const fetchCastById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchMovieTrailer = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchMovies = async (query, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${lang}&include_adult=false`
  );
  return response.data;
};

export {
  fetchTrends,
  fetchMovieById,
  fetchReviewsById,
  fetchCastById,
  fetchMovieTrailer,
  fetchMovies,
};
