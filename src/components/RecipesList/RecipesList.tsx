import type { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
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
