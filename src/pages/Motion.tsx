import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import { corpo } from "@/lib/corpo";
import "./motion.css";

const services = [
  {
    number: "01",
    title: "Fisioterapia avanzada",
    text: "Atención de fisioterapia, distinta de las sesiones de Pilates Máquina. Las tecnologías se consultan aparte.",
  },
  {
    number: "02",
    title: "Pilates Máquina",
    text: "Práctica con máquina en sesiones individuales y grupos reducidos.",
  },
  {
    number: "03",
    title: "Presoterapia",
    text: "Un recurso citado por Corpo, no una modalidad de Pilates. Pregunta por él sin elegirlo como tratamiento.",
  },
];

const Motion = () => (
  <main className="motion-page">
    <header className="motion-nav">
      <Link to="/#proposal-motion" className="motion-mark" aria-label="Volver a la propuesta Motion">CORPO<span>+</span></Link>
      <nav aria-label="Principal">
        <a href="#programas">Programas</a>
        <a href="#metodo">Método</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a className="motion-nav-cta" href="#contacto">Contactar <span aria-hidden="true">↗</span></a>
    </header>

    <section className="motion-hero">
      <img src={heroReformer} alt="Sala luminosa con una máquina de Pilates" />
      <div className="motion-hero-overlay" aria-hidden="true" />
      <div className="motion-hero-copy">
        <p className="motion-kicker">Fisioterapia avanzada + Pilates Máquina / Murcia</p>
        <h1>EL CUERPO<br />SE MUEVE.</h1>
        <p className="motion-intro">Fisioterapia avanzada y Pilates Máquina en Ronda Sur: atención y práctica con máquina, en espacios distintos de la oferta.</p>
        <a href="#programas" className="motion-circle-link">Explorar<br />servicios <span aria-hidden="true">↓</span></a>
      </div>
      <p className="motion-side-label">Corpo / Movimiento con criterio</p>
    </section>

    <section id="programas" className="motion-programs">
      <div className="motion-section-heading">
        <p className="motion-kicker">01 / Lo que hacemos</p>
        <h2>ATENCIÓN<br /><em>PERSONAL.</em></h2>
      </div>
      <div className="motion-program-list">
        {services.map((service) => (
          <article key={service.number} className="motion-program">
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a
              className="motion-program-action"
              href={corpo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar sobre ${service.title} por WhatsApp`}
            >
              Consultar <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>

    <section id="metodo" className="motion-method">
      <div className="motion-method-image"><img src={fisio} alt="Manos durante una sesión de terapia manual" loading="lazy" /></div>
      <div className="motion-method-copy">
         <p className="motion-kicker">02 / Servicios y recursos</p>
        <h2>MOVERSE<br />CON<br /><em>CRITERIO.</em></h2>
         <p>La fisioterapia y el Pilates Máquina son servicios; presoterapia, diatermia y ondas de choque son recursos citados por Corpo. Si quieres saber más, pregunta directamente o utiliza el enlace de reserva online.</p>
         <div className="motion-steps"><span>Fisioterapia</span><span>Pilates Máquina</span><span>Otros recursos</span></div>
      </div>
    </section>

    <section className="motion-statement">
      <img src={pilates} alt="Persona practicando Pilates Máquina" loading="lazy" />
      <div><p className="motion-kicker">Corpo en movimiento</p><h2>Movimiento<br /><em>guiado.</em></h2></div>
    </section>

    <section id="contacto" className="motion-contact">
      <div className="motion-contact-heading">
        <p className="motion-kicker">03 / Contacto</p>
        <h2>HABLEMOS<br /><em>DE TU<br />CUERPO.</em></h2>
        <p>Reserva online o contacta con Corpo por el canal que prefieras.</p>
      </div>
      <div className="motion-contact-panel">
        <a className="motion-contact-booking" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">
          Reservar online <span aria-hidden="true">↗</span>
        </a>
        <div className="motion-contact-links">
          <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <a href={corpo.phoneUrl}>Llamar <span>{corpo.phone}</span></a>
          <a href={corpo.emailUrl}>Email <span>{corpo.email}</span></a>
        </div>
        <address className="motion-contact-details">
          {corpo.addressLines.map((line) => <span key={line}>{line}</span>)}
        </address>
      </div>
    </section>
  </main>
);

export default Motion;
