import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

// Entradas al hacer scroll: el contenido es visible si el script no corre, y con movimiento reducido no se anima.
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

function App() {
  const [tag, setTag] = useState('');
  useReveal();

  // Un nodo del inicio filtra los proyectos y baja hasta ellos.
  const pickTag = useCallback((t) => {
    setTag(t);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('proyectos')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <Navbar />
      <main id="main">
        <Hero onPickTag={pickTag} />
        <About />
        <Projects tag={tag} setTag={setTag} />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="site-foot">
        <div className="big" aria-hidden="true">Lara Lara</div>
        <small>&copy; {new Date().getFullYear()} Diseñado y desarrollado por Alejandro Lara Lara.</small>
      </footer>
    </>
  );
}

export default App;
