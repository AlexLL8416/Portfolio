import { useState } from 'react';
import { SITE } from '../../data/content';
import ContactRows from '../ui/ContactRows';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  // Envía a Formspree sin salir de la página. Sin JavaScript el formulario sigue funcionando como POST normal.
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus('Enviando…');
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(String(r.status));
      form.reset();
      setStatus('Mensaje enviado. Te responderé lo antes posible.');
    } catch {
      setStatus(`No se pudo enviar. Escríbeme a ${SITE.links.emailText}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="wrap" id="contacto">
      <h2 data-reveal>{SITE.contact.title}</h2>
      <div className="contact">
        <div data-reveal>
          <p>{SITE.contact.text}</p>
          <ContactRows />
        </div>
        <form action={SITE.contact.formAction} method="POST" onSubmit={onSubmit} data-reveal style={{ '--i': 1 }}>
          <label htmlFor="email">Tu correo electrónico
            <input type="email" id="email" name="email" required autoComplete="email" placeholder="ejemplo@correo.com" />
          </label>
          <label htmlFor="subject">Asunto
            <input type="text" id="subject" name="subject" required placeholder="Oportunidad laboral, proyecto…" />
          </label>
          <label htmlFor="message">Mensaje
            <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje aquí…" />
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <button className="btn" type="submit" disabled={sending}>Enviar mensaje</button>
            <p className="status" role="status">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
