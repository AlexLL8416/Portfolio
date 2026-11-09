import { SITE } from '../../data/content';

const About = () => (
  <section className="wrap" id="sobre-mi">
    <h2 data-reveal>Sobre mí</h2>
    <div className="about">
      <div className="bio" data-reveal>
        {SITE.bio.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </div>
      <div className="tfg" id="tfg" data-reveal style={{ '--i': 1 }}>
        <div>
          <h3>Trabajo Fin de Grado</h3>
          <p className="k">En curso · 2026 – 2027</p>
          <p className="tt">{SITE.tfg.title}</p>
        </div>
        <p>{SITE.tfg.text}</p>
      </div>
    </div>
  </section>
);

export default About;
