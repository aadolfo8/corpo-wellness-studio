import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import fisio from "@/assets/service-fisio.jpg";
import recovery from "@/assets/service-recovery.jpg";
import "./restore.css";
import "./restore-overrides.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const movementAxes = [
  ["Movilidad", "Moverte con más libertad y entender qué limita tu gesto.", "Fisioterapia avanzada"],
  ["Fuerza", "Volver a construir capacidad con una progresión adaptada.", "Ejercicio terapéutico"],
  ["Control", "Coordinar respiración, postura y movimiento con atención.", "Pilates Máquina"],
];

const Restore = () => (
  <main className="restore-page">
    <header className="restore-header">
      <Link to="/" className="restore-logo" aria-label="Volver a propuestas">CORPO<span>+</span></Link>
      <nav aria-label="Navegación principal"><a href="#mapa">Mapa</a><a href="#camino">Camino</a><a href="#contacto">Empezar</a></nav>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="restore-header-action" aria-label="Escribir por WhatsApp (nueva pestaña)">Cuéntanos <span aria-hidden="true">↗</span></a>
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
        <img src={recovery} alt="Ejercicio de recuperación guiado en Corpo" />
        <div className="restore-map-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <span className="restore-map-label restore-map-label-one">Movilidad</span>
        <span className="restore-map-label restore-map-label-two">Fuerza</span>
        <span className="restore-map-label restore-map-label-three">Control</span>
        <span className="restore-map-coordinates">37° 58' N<br />1° 08' W</span>
      </figure>
    </section>

    <section id="mapa" className="restore-axis-section" aria-labelledby="axis-title">
      <div className="restore-axis-intro"><p className="restore-code">01 / El mapa</p><h2 id="axis-title">Tres formas<br />de volver.</h2><p>No tienes que llegar con una respuesta. Puedes empezar por reconocer qué echas de menos en tu movimiento.</p></div>
      <div className="restore-axis-list">
        {movementAxes.map(([title, text, service], index) => <article key={title}><span className="restore-axis-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><strong>{service}</strong></article>)}
      </div>
    </section>

    <section id="camino" className="restore-path" aria-labelledby="path-title">
      <div className="restore-path-heading"><p className="restore-code">02 / El camino</p><h2 id="path-title">No hay que<br /><em>adivinar.</em></h2><p>Hay que mirar, preguntar y elegir el siguiente paso con alguien que sepa acompañarlo.</p></div>
      <div className="restore-path-track">
        <div className="restore-path-line" aria-hidden="true"><span /></div>
        <ol className="restore-path-list">
          <li><span>01</span><h3>Escuchar</h3><p>Qué ocurre, desde cuándo y qué quieres volver a hacer.</p></li>
          <li><span>02</span><h3>Valorar</h3><p>Movilidad, dolor, hábitos y objetivos reales.</p></li>
          <li><span>03</span><h3>Acompañar</h3><p>Tratamiento, ejercicio o Pilates adaptado a tu momento.</p></li>
        </ol>
      </div>
    </section>

    <section className="restore-evidence" aria-labelledby="evidence-title">
      <div className="restore-evidence-image"><img src={aboutStudio} alt="Interior del espacio Corpo en Murcia" loading="lazy" /><span>Un espacio para trabajar cerca</span></div>
      <div className="restore-evidence-copy"><p className="restore-code">03 / El espacio</p><h2 id="evidence-title">La recuperación<br /><em>también necesita lugar.</em></h2><p>Corpo combina fisioterapia y Pilates Máquina en un estudio de Ronda Sur pensado para trabajar con atención, sin ruido innecesario.</p><a href="#contacto" className="restore-text-link">Abrir contacto <span aria-hidden="true">↘</span></a></div>
    </section>

    <section id="contacto" className="restore-contact" aria-labelledby="contact-title">
      <div className="restore-contact-heading"><p className="restore-code">04 / El siguiente paso</p><h2 id="contact-title">Cuéntanos<br /><em>qué quieres recuperar.</em></h2></div>
      <div className="restore-contact-body"><p>No hace falta saber el nombre del tratamiento. Escríbenos una frase, llámanos o reserva una primera conversación.</p><div className="restore-contact-actions"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)">WhatsApp <span aria-hidden="true">↗</span></a><a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a><a href="tel:+34624060340">624 06 03 40 <span aria-hidden="true">↗</span></a></div><address>C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />30010 San Benito - Patiño, Murcia<br /><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps (nueva pestaña)">Cómo llegar</a></address></div>
    </section>

    <footer className="restore-footer"><Link to="/" className="restore-logo">CORPO<span>+</span></Link><span>Fisioterapia · Recuperación · Murcia</span><a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
  </main>
);

export default Restore;
