import { useLayoutEffect, useRef } from 'react';
import { SITE, HERO_NODES } from '../../data/content';
import ContactRows from '../ui/ContactRows';

// Posición de cada nodo a lo largo de la cinta (0 = inicio del trazo, 1 = final).
const NODE_T = [0.07, 0.17, 0.27, 0.37, 0.46];

const Hero = ({ onPickTag }) => {
  const heroRef = useRef(null);
  const pathRef = useRef(null);
  const nodeRefs = useRef([]);

  // Coloca los nodos sobre la cinta en escritorio; en móvil van en una fila normal (CSS).
  useLayoutEffect(() => {
    const wide = window.matchMedia('(min-width: 861px)');
    const place = () => {
      const hero = heroRef.current, path = pathRef.current;
      if (!hero || !path) return;
      const L = path.getTotalLength(), { width, height } = hero.getBoundingClientRect();
      nodeRefs.current.forEach((n, i) => {
        if (!n) return;
        if (!wide.matches) { n.style.left = n.style.top = ''; return; }
        const p = path.getPointAtLength(L * NODE_T[i]);
        n.style.left = `${(p.x / 1440) * width}px`;
        n.style.top = `${(p.y / 900) * height}px`;
      });
    };
    place();
    window.addEventListener('resize', place);
    wide.addEventListener('change', place);
    document.fonts?.ready.then(place);
    return () => { window.removeEventListener('resize', place); wide.removeEventListener('change', place); };
  }, []);

  return (
    <section className="hero wrap" id="inicio" ref={heroRef}>
      <svg className="curve" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <path ref={pathRef} pathLength="1" d="M-40 868C420 884 760 858 920 720S1090 250 1210 110S1400 -10 1500 -40" stroke="#A9C7E3" strokeWidth="30" opacity=".8" />
        <path pathLength="1" d="M-40 900C440 912 800 884 960 750S1130 290 1250 150S1420 30 1500 0" stroke="#6F86A3" strokeWidth="8" opacity=".55" />
      </svg>

      <div className="hero-text">
        <h1 className="name"><span><i>Alejandro</i></span><span><i>Lara Lara</i></span></h1>
        <p className="role">{SITE.degree}</p>
        <p className="seek">Busco prácticas en <mark>inteligencia artificial</mark> a partir de enero de 2027.</p>
        <div className="actions">
          <a className="btn" href="#proyectos">Ver proyectos</a>
          <a className="btn soft" href={SITE.cv} target="_blank" rel="noopener noreferrer">Descargar CV</a>
        </div>
        <ContactRows />
      </div>

      <figure className="portrait">
        <img src={SITE.photo} alt="Retrato de Alejandro Lara Lara" width="476" height="600" fetchPriority="high" />
        <a className="now" href="#sobre-mi"><small>Ahora mismo · TFG</small><b>{SITE.tfg.short}</b></a>
      </figure>

      <ul className="nodes" aria-label="Ver proyectos por tecnología">
        <li className="cap">Ver proyectos por tecnología</li>
        {HERO_NODES.map((t, i) => (
          <li key={t}>
            <button
              type="button"
              className="node"
              style={{ '--i': i }}
              ref={(el) => (nodeRefs.current[i] = el)}
              onClick={() => onPickTag(t)}
              aria-label={`Ver proyectos con ${t}`}
            >
              {t}<span>{SITE.projects.filter((p) => p.tags.includes(t)).length}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
