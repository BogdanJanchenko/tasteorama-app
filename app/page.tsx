'use client';

import css from './page.module.css';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';

import { Toaster } from 'react-hot-toast';
import Contacts from '@/components/Contacts/Contacts';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Education from '@/components/Education/Education';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <main className={css.main}>
      <Section>
        <Container>
          <Toaster />
          <Header />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contacts />
        </Container>
      </Section>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section>
        <Container>
          <Skills />
        </Container>
      </Section>
      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>
      <Section>
        <Container>
          <Education />
        </Container>
      </Section>
      <Section>
        <Container>
          <Footer />
        </Container>
      </Section>
    </main>
  );
};

export default Home;
