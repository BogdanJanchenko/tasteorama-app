import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface Category {
  _id: string;
  name: string;
}

export interface Ingredient {
  _id: string;
  name: string;
  desc: string;
  img: string;
}

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  time: string;
  category: string;
  thumb: string;
  cals?: number;
}

export interface RecipesResponse {
  recipes: Recipe[];
  totalPages: number;
  totalRecipes: number;
}

export const getCategories = async () => {
  const { data } = await api.get<Category[]>('/api/categories');
  return data;
};

export const getIngredients = async () => {
  const { data } = await api.get<Ingredient[]>('/api/ingredients');
  return data;
};
export const getRecipes = async ({
  page = 1,
  perPage = 12,
  category,
  ingredient,
  search,
}: {
  page?: number;
  perPage?: number;
  category?: string;
  ingredient?: string;
  search?: string;
}) => {
  const { data } = await api.get<RecipesResponse>('/api/recipes', {
    params: {
      page,
      perPage,
      ...(category && { category }),
      ...(ingredient && { ingredient }),
      ...(search && { search }),
    },
  });

  return data;
};
