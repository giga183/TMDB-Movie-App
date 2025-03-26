import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../services/getMovies'

export const useGetMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['discover'],
    queryFn: getMovies,
  })
  return {
    moviesData: data?.data?.results || [],
    isMovieLoading: isLoading,
  }
}
