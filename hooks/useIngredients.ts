import { useQuery } from '@tanstack/react-query';
import { getIngredients } from '@/services/recipesApi';

export const useIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
    staleTime: 1000 * 60 * 60,
  });
};
