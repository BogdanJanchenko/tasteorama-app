'use client';

import styles from './FiltersModal.module.css';
import type { Category, Ingredient } from '@/src/types/recipe';

interface FiltersModalProps {
  categories: Category[];
  ingredients: Ingredient[];

  selectedCategory: string;
  selectedIngredient: string;

  onCategoryChange: (value: string) => void;
  onIngredientChange: (value: string) => void;

  onResetFilters: () => void;
  onClose: () => void;
}

const FiltersModal = ({
  categories,
  ingredients,
  selectedCategory,
  selectedIngredient,
  onCategoryChange,
  onIngredientChange,
  onResetFilters,
  onClose,
}: FiltersModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span>Filters</span>

          <button type="button" className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>

        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Category</option>

          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedIngredient}
          onChange={(e) => onIngredientChange(e.target.value)}
        >
          <option value="">Ingredient</option>

          {ingredients.map((ingredient) => (
            <option key={ingredient._id} value={ingredient._id}>
              {ingredient.name}
            </option>
          ))}
        </select>

        <button type="button" className={styles.resetButton} onClick={onResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
};

export default FiltersModal;
