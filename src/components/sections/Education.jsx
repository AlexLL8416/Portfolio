import { SITE } from '../../data/content';

const Education = () => {
  const ed = SITE.education;
  return (
    <section className="wrap" id="estudios">
      <h2 data-reveal>Estudios</h2>
      <div className="edu-intro">
        <div data-reveal>
          <p className="degree">{ed.title}</p>
          <p className="period" style={{ marginTop: 12 }}>{ed.meta}</p>
        </div>
        <div data-reveal style={{ '--i': 1 }}>
          <h3 style={{ fontSize: 26 }}>{ed.profileTitle}</h3>
          <p style={{ marginTop: 12 }}>{ed.profile}</p>
          <a className="textlink" href={ed.itinerary} target="_blank" rel="noopener noreferrer">Descargar itinerario oficial (PDF) ↗</a>
        </div>
      </div>
      <ol className="years">
        {ed.years.map((y, i) => (
          <li key={y.year} className="year" data-reveal style={{ '--i': i }}>
            <p className="period">{y.period}</p>
            <h3>{y.year}</h3>
            <p className="yt">{y.title}</p>
            <ul>{y.subjects.map((s) => <li key={s}>{s}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
