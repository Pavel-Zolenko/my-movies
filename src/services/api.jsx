import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

const fetchTrends = async (page) => {
    const response = await axios.get(
        `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
};

const fetchMovieById = async (id) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
};

const fetchCastById = async (id) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};


const fetchMovies = async (query) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  );
  return response.data;
};





export {
  fetchTrends,
  fetchMovieById,
  fetchReviewsById,
  fetchCastById,
  fetchMovies,
};