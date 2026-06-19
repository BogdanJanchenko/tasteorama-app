'use client';

import css from './page.module.css';
import Section from '@/src/components/Section/Section';
import Container from '@/src/components/Container/Container';

import { Toaster } from 'react-hot-toast';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';

import RecipesPage from '@/src/components/RecipesPage/RecipesPage';

const Home = () => {
  return (
    <main className={css.main}>
      <Section className={css.headerSection}>
        <Container>
          <Toaster />
          <Header />
        </Container>
      </Section>

      <Section>
        <Container>
          <RecipesPage />
        </Container>
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
