import { SITE } from '../../data/content';

const links = [
  { href: '#proyectos', label: 'Proyectos', keep: true },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#estudios', label: 'Estudios' },
  { href: '#contacto', label: 'Contacto', keep: true },
];

const Navbar = () => (
  <header className="topbar">
    <a className="mark" href="#inicio">A. Lara Lara</a>
    <nav aria-label="Principal">
      <ul>
        {links.map((l) => (
          <li key={l.href} className={l.keep ? 'keep' : undefined}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
    <a className="btn sm" href={SITE.cv} target="_blank" rel="noopener noreferrer">Descargar CV</a>
  </header>
);

export default Navbar;
