import { SITE } from '../../data/content';

const allTags = [...new Set(SITE.projects.flatMap((p) => p.tags))];

// El filtro vive en App para que los nodos del inicio también puedan cambiarlo.
const Projects = ({ tag, setTag }) => {
  const shown = SITE.projects.filter((p) => !tag || p.tags.includes(tag)).length;
  return (
    <section className="wrap" id="proyectos">
      <div className="head">
        <h2 data-reveal>Proyectos</h2>
        <p className="count" aria-live="polite">
          {tag ? `${shown} de ${SITE.projects.length} proyectos usan ${tag}` : `${SITE.projects.length} proyectos`}
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filtrar proyectos por tecnología">
        <button type="button" aria-pressed={!tag} onClick={() => setTag('')}>Todos</button>
        {allTags.map((t) => (
          <button type="button" key={t} aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>

      {SITE.projects.map((p) => (
        <article key={p.title} className={`proj${tag && !p.tags.includes(tag) ? ' off' : ''}`}>
          <figure data-reveal><img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" /></figure>
          <div className="txt" data-reveal style={{ '--i': 1 }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="plinks">
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">Código ↗</a>}
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Demo en vivo ↗</a>}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
