import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite, removeFavorite } from '@/services/favoritesApi';

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });

      queryClient.invalidateQueries({
        queryKey: ['recipes'],
      });
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });

      queryClient.invalidateQueries({
        queryKey: ['recipes'],
      });
    },
  });

  return {
    addMutation,
    removeMutation,
  };
};
