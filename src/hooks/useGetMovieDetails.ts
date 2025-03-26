import { useQuery } from '@tanstack/react-query'
import { getMoviesDetails } from '../services/getMoviedDetails'

export const useGetMovieDetails = (movieId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => getMoviesDetails(movieId || ''),
    enabled: !!movieId,
  })

  return {
    movieDetailsData: data?.data || [],
    isMovieDetailsLoading: isLoading,
  }
}
