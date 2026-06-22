import api from './api';

export const getFavorites = async () => {
  const { data } = await api.get('/api/recipes/favorites');
  return data.recipes;
};

export const addFavorite = async (recipeId: string) => {
  const { data } = await api.post(`/api/recipes/favorites/${recipeId}`);
  return data;
};

export const removeFavorite = async (recipeId: string) => {
  const { data } = await api.delete(`/api/recipes/favorites/${recipeId}`);
  return data;
};
