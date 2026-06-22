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
