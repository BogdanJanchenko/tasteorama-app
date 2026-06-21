'use client';

import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import RecipesPage from '@/components/RecipesPage/RecipesPage';

const Home = () => {
  return (
    <Section>
      <Container>
        <RecipesPage />
      </Container>
    </Section>
  );
};

export default Home;
