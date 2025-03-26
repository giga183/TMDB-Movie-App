import { privateAxios } from "../config/axios";
import { apiKey } from "./getMovies";

export const GetTopRated = async () => {
  return privateAxios.get<{ results: [] }>(
    `/movie/top_rated?api_key=${apiKey}`
  );
};
