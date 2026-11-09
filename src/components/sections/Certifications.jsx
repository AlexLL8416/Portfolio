import { SITE } from '../../data/content';

const Certifications = () => (
  <section className="wrap" id="certificaciones">
    <h2 data-reveal>Certificaciones</h2>
    <ul className="certs">
      {SITE.certs.map((c, i) => (
        <li key={c.title} data-reveal style={{ '--i': i % 3 }}>
          <p className="period">{c.date}</p>
          <div>
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
