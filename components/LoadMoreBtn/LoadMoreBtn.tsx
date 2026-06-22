'use client';

import { MouseEvent } from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreButtonProps {
  onLoadMore: () => Promise<void> | void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, isLoading }: LoadMoreButtonProps) {
  const handleClick = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (isLoading) return;

    await onLoadMore();
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`${styles.btnLoadMore} ${isLoading ? styles.loading : ''}`}
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
}
