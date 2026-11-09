import { SITE } from '../../data/content';

const Certifications = () => (
  <section className="wrap" id="certificaciones">
    <h2 data-reveal>Certificaciones</h2>
    <ul className="certs">
      {SITE.certs.map((c, i) => (
        <li key={c.title} data-reveal style={{ '--i': i % 3 }}>
          <a href={c.image} target="_blank" rel="noopener noreferrer" aria-label={`Ver imagen del certificado ${c.title}`}>
            <img src={c.image} alt={`Certificado ${c.title}, ${c.issuer}`} loading="lazy" />
          </a>
          <div>
            <p className="period">{c.date}</p>
            <h3>{c.title}</h3>
            <p className="issuer">{c.issuer}</p>
          </div>
          {c.url && <a className="textlink" href={c.url} target="_blank" rel="noopener noreferrer">Ver credencial ↗</a>}
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
