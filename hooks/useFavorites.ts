import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '@/services/favoritesApi';

export const useFavorites = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });
};
