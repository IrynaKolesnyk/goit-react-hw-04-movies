import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const API_KEY = "09d08e04d534bbedc28bdfdcf97f61d4"; //process.env.REACT_APP_API_KEY;

const baseURL = "https://api.themoviedb.org/3/";

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${baseURL}trending/movie/week?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
