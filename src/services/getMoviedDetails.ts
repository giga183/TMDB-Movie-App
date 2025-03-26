import { privateAxios } from "../config/axios";

import { apiKey } from "./getMovies";

export const getMoviesDetails = async (movieId: string) => {
  return privateAxios.get<{ movieDetails: [] }>(
    `/movie/${movieId}?api_key=${apiKey}`
  );
};
