import { privateAxios } from "../config/axios";

export const apiKey = "f80568ea125f93a830e11194610594cc";

export const getMovies = async () => {
  return privateAxios.get<{ results: [] }>(`/discover/movie?api_key=${apiKey}`);
};
