const API_KEY = process.env.EXPO_PUBLIC_THE_MOVIE_DB_API_KEY;

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    adult: false,
  },
});

export default api;
