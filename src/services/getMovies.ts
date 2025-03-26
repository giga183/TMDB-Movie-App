import { privateAxios } from "../config/axios";

export const apiKey = import.meta.env.VITE_API_KEY;

export const getMovies = async () => {
  return privateAxios.get<{ results: [] }>(`/discover/movie?api_key=${apiKey}`);
};
