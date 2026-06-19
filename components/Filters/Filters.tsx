'use client';
import css from './Filters.module.css';

type FiltersType = {
  category?: string;
  ingredients?: string;
};

type filtersProps = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

export default function Filters({ filters, setFilters }: filtersProps) {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleIngredientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      ingredient: e.target.value,
    }));
  };
  const handleReset = () => {
    setFilters({});
  };

  return (
    <div className={css.filters}>
      <button onClick={handleReset}>Reset filters</button>
    </div>
  );
}
