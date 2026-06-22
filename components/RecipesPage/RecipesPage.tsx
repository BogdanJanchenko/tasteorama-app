'use client';

import { useState } from 'react';

import Filters from '@/components/Filters/Filters';
import RecipesList from '@/components/RecipesList/RecipesList';
import NoRecipes from '@/components/NoRecipes/NoRecipes';
import Loader from '@/components/Loader/Loader';
import Pagination from '@/components/Pagination/Pagination';

import { useCategories } from '@/hooks/useCategories';
import { useIngredients } from '@/hooks/useIngredients';
import { useRecipes } from '@/hooks/useRecipes';

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
      <h1>Recipes</h1>
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

      {!isLoading && data?.recipes.length === 0 && <NoRecipes />}

      {!isLoading && data?.recipes.length > 0 && <RecipesList recipes={data.recipes} />}

      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
    </>
  );
};

export default RecipesPage;
