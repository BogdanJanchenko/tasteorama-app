import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  if (page >= totalPages) return null;

  return (
    <div className={styles.wrapper}>
      <button className={styles.loadMore} onClick={() => onPageChange(page + 1)}>
        Load More
      </button>
    </div>
  );
};

export default Pagination;
