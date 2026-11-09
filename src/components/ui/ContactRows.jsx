import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { SITE } from '../../data/content';

// Filas de contacto con círculos de color, como en la tarjeta.
const ContactRows = () => (
  <ul className="rows">
    <li><a href={SITE.links.email}><span className="dot d2"><FaEnvelope aria-hidden /></span><span>{SITE.links.emailText}</span></a></li>
    <li><a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer"><span className="dot d1"><FaLinkedinIn aria-hidden /></span><span>LinkedIn</span></a></li>
    <li><a href={SITE.links.github} target="_blank" rel="noopener noreferrer"><span className="dot d3"><FaGithub aria-hidden /></span><span>github.com/AlexLL8416</span></a></li>
  </ul>
);

export default ContactRows;
