import { SITE } from '../../data/content';

const Certifications = () => {
  const c = SITE.cert;
  return (
    <section className="wrap" id="certificaciones">
      <h2 data-reveal>Certificación</h2>
      <div className="cert" data-reveal>
        <img src={c.image} alt={`Certificado ${c.title}`} loading="lazy" />
        <div>
          <h3>{c.title}</h3>
          <p className="issuer">Emitido por {c.issuer} con {c.partner}</p>
          <p className="d">{c.description}</p>
          <a className="btn" href={c.url} target="_blank" rel="noopener noreferrer">Ver certificado oficial ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
