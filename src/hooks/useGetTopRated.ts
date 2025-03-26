import { useQuery } from '@tanstack/react-query'
import { GetTopRated } from '../services/getTopRated'

export const useGetTopRated = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['toprated'],
    queryFn: GetTopRated,
  })
  return {
    topratedData: data?.data?.results || [],
    isTopRatedLoading: isLoading,
  }
}
