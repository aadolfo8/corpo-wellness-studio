import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import fisio from "@/assets/service-fisio.jpg";
import { corpo } from "@/lib/corpo";
import "./restore.css";

const movementAxes = [
  ["movilidad", "Movilidad", "Observar cómo se mueve tu cuerpo y qué gestos quieres trabajar.", "Fisioterapia avanzada"],
  ["fuerza", "Fuerza", "Trabajar fuerza con una progresión adaptada a cada persona.", "Recuperación"],
  ["control", "Control", "Coordinar respiración, postura y movimiento con atención.", "Pilates Máquina"],
];

const Restore = () => (
  <main className="restore-page">
    <header className="restore-header">
      <Link to="/#proposal-restore" className="restore-logo" aria-label="Volver a la propuesta Restore">CORPO<span>+</span></Link>
      <nav aria-label="Navegación principal"><a href="#mapa">Mapa</a><a href="#camino">Camino</a><a href="#contacto">Empezar</a></nav>
      <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="restore-header-action" aria-label="Escribir por WhatsApp (nueva pestaña)">Cuéntanos <span aria-hidden="true">↗</span></a>
    </header>

    <section className="restore-opening" aria-labelledby="restore-title">
      <div className="restore-opening-copy">
        <p className="restore-code">CORPO / RECUPERACIÓN / MURCIA</p>
        <h1 id="restore-title">Vuelve a lo<br /><em>que te mueve.</em></h1>
        <p>Un mapa sencillo para entender qué necesitas recuperar y encontrar una forma clara de empezar.</p>
        <a className="restore-primary" href="#mapa">Abrir el mapa <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="restore-map-visual">
        <figcaption className="sr-only">Mapa visual de movimiento basado en movilidad, fuerza y control.</figcaption>
        <img src={fisio} alt="Manos apoyadas sobre el hombro de una persona" />
        <div className="restore-map-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <a href="#axis-movilidad" className="restore-map-label restore-map-label-one">Movilidad</a>
        <a href="#axis-fuerza" className="restore-map-label restore-map-label-two">Fuerza</a>
        <a href="#axis-control" className="restore-map-label restore-map-label-three">Control</a>
        <span className="restore-map-coordinates">Ronda Sur<br />Murcia</span>
      </figure>
    </section>

    <section id="mapa" className="restore-axis-section" aria-labelledby="axis-title">
      <div className="restore-axis-intro"><p className="restore-code">01 / El mapa</p><h2 id="axis-title">Tres formas<br />de volver.</h2><p>No tienes que llegar con una respuesta. Puedes empezar por reconocer qué echas de menos en tu movimiento.</p></div>
      <div className="restore-axis-list">
        {movementAxes.map(([id, title, text, service], index) => <article id={`axis-${id}`} key={id}><span className="restore-axis-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><strong>{service}</strong></article>)}
      </div>
    </section>

    <section id="camino" className="restore-path" aria-labelledby="path-title">
      <div className="restore-path-heading"><p className="restore-code">02 / El camino</p><h2 id="path-title">No hay que<br /><em>adivinar.</em></h2><p>Puedes conocer las opciones, preguntar y elegir un canal claro para continuar.</p></div>
      <div className="restore-path-track">
        <div className="restore-path-line" aria-hidden="true"><span /></div>
        <ol className="restore-path-list">
          <li><span>01</span><h3>Explorar</h3><p>Conoce la fisioterapia, el Pilates Máquina y la recuperación.</p></li>
          <li><span>02</span><h3>Preguntar</h3><p>Cuéntanos qué necesitas por WhatsApp, teléfono o email.</p></li>
          <li><span>03</span><h3>Continuar</h3><p>Reserva online cuando quieras dar el siguiente paso.</p></li>
        </ol>
      </div>
    </section>

    <section className="restore-evidence" aria-labelledby="evidence-title">
      <div className="restore-evidence-image"><img src={aboutStudio} alt="Sala luminosa con camilla y plantas" loading="lazy" /><span>Un espacio para trabajar cerca</span></div>
      <div className="restore-evidence-copy"><p className="restore-code">03 / El espacio</p><h2 id="evidence-title">La recuperación<br /><em>también necesita lugar.</em></h2><p>Corpo combina fisioterapia y Pilates Máquina en un estudio de Ronda Sur pensado para trabajar con atención, sin ruido innecesario.</p><a href="#contacto" className="restore-text-link">Abrir contacto <span aria-hidden="true">↘</span></a></div>
    </section>

    <section id="contacto" className="restore-contact" aria-labelledby="contact-title">
      <div className="restore-contact-heading"><p className="restore-code">04 / El siguiente paso</p><h2 id="contact-title">Cuéntanos<br /><em>qué quieres recuperar.</em></h2></div>
      <div className="restore-contact-body"><p>No hace falta saber el nombre del tratamiento. Escríbenos, llámanos o reserva online.</p><div className="restore-contact-actions"><a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)">WhatsApp <span aria-hidden="true">↗</span></a><a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a><a href={corpo.phoneUrl}>{corpo.phone} <span aria-hidden="true">↗</span></a><a href={corpo.emailUrl}>{corpo.email} <span aria-hidden="true">↗</span></a></div><address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}<br /><a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a Corpo en Google Maps (nueva pestaña)">Cómo llegar</a></address></div>
    </section>

    <footer className="restore-footer"><Link to="/#proposal-restore" className="restore-logo" aria-label="Volver a la propuesta Restore">CORPO<span>+</span></Link><span>Fisioterapia · Recuperación · Murcia</span><a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
  </main>
);

export default Restore;
