import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;

