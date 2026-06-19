'use client';

import { useState } from 'react';

import Filters from '@/src/components/Filters/Filters';
import RecipesList from '@/src/components/RecipesList/RecipesList';
import NoRecipes from '@/src/components/NoRecipes/NoRecipes';
import Loader from '@/src/components/Loader/Loader';
import Pagination from '@/src/components/Pagination/Pagination';

import { useCategories } from '@/src/hooks/useCategories';
import { useIngredients } from '@/src/hooks/useIngredients';
import { useRecipes } from '@/src/hooks/useRecipes';

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { data: categories = [] } = useCategories();
  const { data: ingredients = [] } = useIngredients();

  const { data, isLoading } = useRecipes({
    page,
    perPage: 12,
    category: selectedCategory,
    ingredient: selectedIngredient,
    search,
  });

  const recipes = data?.recipes ?? [];
  const totalPages = data?.totalPages ?? 1;
  const recipesCount = data?.totalRecipes ?? 0;

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedIngredient('');
    setSearch('');
    setPage(1);
  };

  return (
    <>
      <Filters
        recipesCount={recipesCount}
        categories={categories}
        ingredients={ingredients}
        selectedCategory={selectedCategory}
        selectedIngredient={selectedIngredient}
        onCategoryChange={(value) => {
          setSelectedCategory(value);
          setPage(1);
        }}
        onIngredientChange={(value) => {
          setSelectedIngredient(value);
          setPage(1);
        }}
        onResetFilters={handleResetFilters}
      />

      {isLoading && <Loader />}

      {!isLoading && recipes.length === 0 && <NoRecipes />}

      {!isLoading && recipes.length > 0 && <RecipesList recipes={recipes} />}

      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
    </>
  );
};

export default RecipesPage;
