import { SITE, levelWord } from '../../data/content';

const Skills = () => (
  <section className="wrap" id="habilidades">
    <h2 data-reveal>Habilidades</h2>
    <div className="skills">
      {SITE.skills.map((g, i) => (
        <div key={g.category} data-reveal style={{ '--i': i % 3 }}>
          <h3>{g.category}</h3>
          <ul>
            {g.items.map(([name, level]) => (
              <li key={name} data-l={levelWord(level)}><span>{name}</span><span>{levelWord(level)}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
