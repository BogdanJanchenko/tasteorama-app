import type { Recipe } from '@/src/types/recipe';
import Image from 'next/image';
import styles from './RecipeCard.module.css';
import Link from 'next/link';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={recipe.thumb || '/photos/no-image.jpg'}
        alt={recipe.title || 'Recipe image'}
        width={240}
        height={240}
        className={styles.image}
      />

      <div className={styles.header}>
        <h3>{recipe.title}</h3>

        <div className={styles.time}>
          <Image src="/icons/iconTime.svg" alt="Time icon" width={24} height={24} />
          <span>{recipe.time}</span>
        </div>
      </div>

      <p className={styles.description}>{recipe.description}</p>

      <p className={styles.calories}>
        {recipe.cals ? `~${recipe.cals} cals` : 'No information calories'}
      </p>

      <Link href={`/recipes/${recipe._id}`} className={styles.learnMore}>
        Learn More
      </Link>
      <div className={styles.actions}>
        <button className={styles.learnMore}>Learn More</button>

        <button className={styles.favorite}>
          <Image src="/icons/iconFavorite.svg" alt="Favorite icon" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
