import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        ←
      </button>

      {pages.map((item) => (
        <button
          key={item}
          onClick={() => onPageChange(item)}
          className={`${styles.page} ${page === item ? styles.active : ''}`}
        >
          {item}
        </button>
      ))}

      <button
        className={styles.arrow}
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
