import type { Recipe } from '@/src/types/recipe';
import RecipeCard from '@/src/components/RecipeCard/RecipeCard';
import styles from './RecipesList.module.css';

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipesList;
