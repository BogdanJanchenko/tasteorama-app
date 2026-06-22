import { forwardRef } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipesList.module.css';
import { ServerRecipe } from '@/types/serverRecipe';

interface RecipesListProps {
  recipes: ServerRecipe[];
}

const RecipesList = forwardRef<HTMLUListElement, RecipesListProps>(({ recipes }, ref) => {
  return (
    <ul ref={ref} className={styles.list}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </ul>
  );
});

RecipesList.displayName = 'RecipesList';
export default RecipesList;
