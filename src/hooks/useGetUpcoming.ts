import { useQuery } from '@tanstack/react-query'
import { getUpcoming } from '../services/getUpcoming'

export const useGetUpcoming = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcoming,
  })
  return {
    upcomingData: data?.data?.results || [],
    isUpcomingLoading: isLoading,
  }
}
