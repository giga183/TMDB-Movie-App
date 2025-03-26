import { privateAxios } from "../config/axios";
import { apiKey } from "./getMovies";

export const getUpcoming = async () => {
  return privateAxios.get<{ results: [] }>(`movie/upcoming?api_key=${apiKey}`);
};
