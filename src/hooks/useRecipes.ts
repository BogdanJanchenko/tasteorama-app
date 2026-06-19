import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '@/src/services/recipesApi';

interface RecipesParams {
  page?: number;
  perPage?: number;
  category?: string;
  ingredient?: string;
  search?: string;
}

export const useRecipes = (params: RecipesParams) => {
  return useQuery({
    queryKey: ['recipes', params],
    queryFn: () => getRecipes(params),
    placeholderData: (previousData) => previousData,
  });
};
