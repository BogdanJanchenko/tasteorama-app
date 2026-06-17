'use client';

import css from './page.module.css';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';

import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LoadMoreButton from '@/components/LoadMoreBtn/LoadMoreBtn';
import { useState } from 'react';
import Loader from '@/components/Loader/Loader';
import SaveButton from '@/components/Auth/SaveButton';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleLoadMoreRecipes = async (): Promise<void> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Recipes loaded successfully!');
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className={css.main}>
      <Section className={css.headerSection}>
        <Container>
          <Toaster />
          <Header />
        </Container>
      </Section>

      <Section>
        {loading && <Loader />}
        <Container>
          <h2>Demo Save</h2>
          <SaveButton />
        </Container>
        <LoadMoreButton onLoadMore={handleLoadMoreRecipes} isLoading={loading} />
      </Section>

      <Section className={css.footerSection}>
        <Container>
          <Footer />
        </Container>
      </Section>
    </main>
  );
};

export default Home;
