import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import fisio from "@/assets/service-fisio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import { corpo } from "@/lib/corpo";
import "./eje.css";

const services = [
  {
    id: "01",
    name: "Fisioterapia avanzada",
    detail: "Servicio de atención de fisioterapia, distinto de las sesiones de Pilates Máquina.",
    image: fisio,
  },
  {
    id: "02",
    name: "Pilates Máquina",
    detail: "Práctica con máquina en sesiones individuales y en grupos reducidos.",
    image: heroReformer,
  },
  {
    id: "03",
    name: "Recursos publicados",
    detail: "Ondas de choque, diatermia y presoterapia: recursos citados, no modalidades de Pilates.",
    image: aboutStudio,
  },
];

const Eje = () => (
  <main className="eje-page">
    <header className="eje-header">
      <Link to="/#proposal-eje" className="eje-brand" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
      <p>Fisioterapia + Pilates Máquina</p>
      <p>Ronda Sur / Murcia</p>
      <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
    </header>

    <section className="eje-hero" aria-labelledby="eje-title">
      <div className="eje-hero-code"><span>UNIDAD / 12</span><span>ESTUDIO DE MOVIMIENTO</span></div>
      <h1 id="eje-title">MOVER<br /><strong>ES</strong><br />VOLVER</h1>
      <figure className="eje-hero-image">
        <img src={heroReformer} alt="Máquina Reformer en la sala de movimiento de Corpo" fetchPriority="high" />
        <figcaption><span>01</span><span>El punto de partida cambia para cada cuerpo.</span></figcaption>
      </figure>
      <div className="eje-hero-intro">
        <p>Dos servicios principales y otros recursos publicados: conoce la oferta antes de abrir la reserva.</p>
        <a href="#servicios">Ver sistemas <span aria-hidden="true">↓</span></a>
      </div>
      <span className="eje-registration eje-registration--a" aria-hidden="true">+</span>
      <span className="eje-registration eje-registration--b" aria-hidden="true">+</span>
    </section>

    <section id="servicios" className="eje-systems" aria-labelledby="systems-title">
      <header className="eje-section-bar">
        <p>Oferta comunicada por Corpo</p>
        <h2 id="systems-title">SERVICIOS<br />Y RECURSOS</h2>
        <span>[ 01 - 03 ]</span>
      </header>
      <div className="eje-system-grid">
        {services.map((service) => (
          <article className="eje-system" key={service.id}>
            <div className="eje-system-head"><span>{service.id}</span><span>Oferta publicada</span></div>
            <img src={service.image} alt="" loading="lazy" decoding="async" />
            <div className="eje-system-copy"><h3>{service.name}</h3><p>{service.detail}</p></div>
          </article>
        ))}
      </div>
    </section>

    <section className="eje-process" aria-labelledby="process-title">
      <div className="eje-process-title"><p>Secuencia de consulta</p><h2 id="process-title">UN PASO<br />A LA VEZ</h2></div>
      <ol>
        <li><span>01</span><div><h3>Explorar</h3><p>Conoce los servicios y recursos que Corpo ha publicado.</p></div></li>
        <li><span>02</span><div><h3>Consultar</h3><p>Pregunta por modalidades y disponibilidad por WhatsApp o email.</p></div></li>
        <li><span>03</span><div><h3>Reservar</h3><p>Utiliza el enlace de reserva online de Corpo.</p></div></li>
      </ol>
      <div className="eje-process-mark" aria-hidden="true">C<br />R<br />P</div>
    </section>

    <section className="eje-contact" aria-labelledby="contact-title">
      <div className="eje-contact-title"><p>Canal abierto</p><h2 id="contact-title">PONERLO<br />EN MARCHA</h2></div>
      <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
      <div className="eje-contact-links">
        <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer"><span>01</span>Reservar <b aria-hidden="true">↗</b></a>
        <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer"><span>02</span>WhatsApp <b aria-hidden="true">↗</b></a>
        <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer"><span>03</span>Cómo llegar <b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <footer className="eje-footer">
      <Link to="/#proposal-eje" className="eje-brand" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
      <span>{corpo.phone}</span>
      <a href={corpo.emailUrl}>{corpo.email}</a>
      <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
    </footer>
  </main>
);

export default Eje;
