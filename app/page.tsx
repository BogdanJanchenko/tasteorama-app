// 'use client';

// import Section from '@/components/Section/Section';
// import Container from '@/components/Container/Container';

// import LoadMoreButton from '@/components/LoadMoreBtn/LoadMoreBtn';
// import Loader from '@/components/Loader/Loader';
// import SaveButton from '@/components/Auth/SaveButton';

// import { useState, useEffect } from 'react';
// import { useQuery, keepPreviousData } from '@tanstack/react-query';
// import { useDebounce } from 'use-debounce';

// import { fetchRecipes } from '@/lib/clientApi';

// import toast from 'react-hot-toast';

// const Home = () => {
//   const [page, setPage] = useState<number>(1);
//   const [search, setSearch] = useState<string>('');
//   const [category, setCategory] = useState<string>('');
//   const [ingredient, setIngredient] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);

//   const [debounceSearchQuery] = useDebounce(search, 300);

//   const { data, isError, error } = useQuery({
//     queryKey: ['notes', page, debounceSearchQuery, category, ingredient],
//     queryFn: () =>
//       fetchRecipes({
//         page: page,
//         perPage: 12,
//         search: debounceSearchQuery,
//         category: category,
//         ingredient: ingredient,
//       }),
//     placeholderData: keepPreviousData,
//   });

//   useEffect(() => {
//     if (isError && error) {
//       toast.error(`Oops, something went wrong while get the note.`);
//       console.log(`Something went wrong while get the note: ${error}`);
//     }
//   }, [isError, error]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, ingredient]);

//   return (
//     <Section>
//       <Container>
//         <LoadMoreButton onLoadMore={handleLoadMoreRecipes} isLoading={loading} />
//         {loading && <Loader />}
//       </Container>
//     </Section>
//   );
// };

// export default Home;
'use client';

import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import LoadMoreButton from '@/components/LoadMoreBtn/LoadMoreBtn';
import Loader from '@/components/Loader/Loader';
import Filters from '@/components/Filters/Filters';
import RecipesList from '@/components/RecipesList/RecipesList';
import NoRecipes from '@/components/NoRecipes/NoRecipes';

import {
  fetchRecipes,
  FetchRecipesResponse,
  fetchCategories,
  fetchIngredients,
} from '@/lib/clientApi';
import { ServerRecipe } from '@/types/serverRecipe';

import { Category } from '@/types/category';
import { Ingredient } from '@/types/indredient';

import toast from 'react-hot-toast';
import css from './page.module.css';

const PER_PAGE = 12;

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [ingredient, setIngredient] = useState<string>('');

  const [recipes, setRecipes] = useState<ServerRecipe[]>([]);
  const recipesListRef = useRef<HTMLUListElement>(null);
  const loadMoreScrollIndexRef = useRef<number | null>(null);

  const [debounceSearchQuery] = useDebounce(search, 300);

  useEffect(() => {
    setPage(1);
    setRecipes([]);
  }, [debounceSearchQuery, category, ingredient]);

  const { data, isLoading, isFetching, isError } = useQuery<FetchRecipesResponse>({
    queryKey: ['recipes', page, debounceSearchQuery, category, ingredient],
    queryFn: () =>
      fetchRecipes({
        page,
        perPage: PER_PAGE,
        search: debounceSearchQuery || undefined,
        category: category || undefined,
        ingredient: ingredient || undefined,
      }),
  });

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong. Please try again later.');
    }
  }, [isError]);

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });

  const { data: ingredients } = useQuery<Ingredient[]>({
    queryKey: ['ingredients'],
    queryFn: fetchIngredients,
    staleTime: Infinity,
  });

  const recipesCount = data?.totalRecipes ?? 0;

  useEffect(() => {
    if (!data?.recipes.length || data.page !== page) return;

    setRecipes((prev) => {
      if (page === 1) {
        return data.recipes;
      }
      return [...prev, ...data.recipes];
    });
  }, [data, page]);

  useEffect(() => {
    if (loadMoreScrollIndexRef.current === null) return;
    if (!recipesListRef.current) return;
    if (recipes.length <= loadMoreScrollIndexRef.current) return;

    const targetIndex = loadMoreScrollIndexRef.current;
    const targetElement = recipesListRef.current.children[targetIndex] as HTMLElement | null;

    if (targetElement) {
      window.requestAnimationFrame(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }

    loadMoreScrollIndexRef.current = null;
  }, [recipes.length]);

  const handleResetFilters = () => {
    setCategory('');
    setIngredient('');
    setSearch('');
  };

  const handleLoadMoreRecipes = () => {
    loadMoreScrollIndexRef.current = recipes.length;
    setPage((prevPage) => prevPage + 1);
  };

  const hasNextPage = data ? page < data.totalPages : false;

  const isLoadingMore = isFetching && page > 1;

  return (
    <Section>
      <Container>
        <div className={css.home}>
          {categories && ingredients && (
            <Filters
              recipesCount={recipesCount}
              categories={categories}
              ingredients={ingredients}
              selectedCategory={category}
              selectedIngredient={ingredient}
              onCategoryChange={(value) => {
                setCategory(value);
                setPage(1);
              }}
              onIngredientChange={(value) => {
                setIngredient(value);
                setPage(1);
              }}
              onResetFilters={handleResetFilters}
            />
          )}

          {isLoading && recipes.length === 0 && <Loader />}

          {!isLoading && recipes.length === 0 && <NoRecipes />}

          {recipes.length > 0 && <RecipesList ref={recipesListRef} recipes={recipes} />}

          {isLoadingMore && <Loader />}

          {hasNextPage && (
            <LoadMoreButton onLoadMore={handleLoadMoreRecipes} isLoading={isLoadingMore} />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Home;
