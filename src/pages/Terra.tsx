import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { corpo } from "@/lib/corpo";
import "./terra.css";

const stations = [
  ["Llegar", "Dejar el ruido fuera y llegar con tiempo para ti."],
  ["Observar", "Escuchar qué ocurre antes de elegir qué hacer."],
  ["Mover", "Encontrar el gesto, la carga o la práctica que necesitas."],
  ["Volver", "Llevarte una forma posible de seguir cuidándote."],
];

const services = [
  ["Fisioterapia avanzada", "Atención personalizada de fisioterapia con una progresión adaptada a cada persona.", fisio],
  ["Pilates Máquina", "Práctica en Reformer dentro de un estudio dedicado al movimiento.", pilates],
  ["Terapia manual", "Una de las formas de trabajo disponibles en la clínica.", recovery],
  ["Tecnología", "Ondas de choque, diatermia y presoterapia entre los servicios confirmados de Corpo.", aboutStudio],
];

const Terra = () => (
  <main className="terra-page">
    <header className="terra-topbar">
      <Link to="/#proposal-terra" className="terra-logo" aria-label="Volver a la propuesta Terra">CORPO</Link>
      <span className="terra-season">Una clínica en Ronda Sur</span>
      <a href="#visita" className="terra-top-link">Cómo llegar <span aria-hidden="true">↘</span></a>
    </header>

    <section className="terra-cyclorama" aria-labelledby="terra-title">
      <div className="terra-cyclorama-copy">
        <p className="terra-kicker">Fisioterapia · Pilates Máquina · Murcia</p>
        <h1 id="terra-title">Una pausa<br />que también<br /><em>avanza.</em></h1>
        <p>Un estudio para volver a escuchar tu cuerpo, moverte con atención y encontrar tu propio ritmo.</p>
        <a className="terra-round-link" href="#recorrido">Conocer<br />el recorrido <span>↓</span></a>
      </div>
      <figure className="terra-cyclorama-image">
        <img src={heroReformer} alt="Sala luminosa con máquinas Reformer" />
        <figcaption>La luz cambia.<br />El cuerpo también.</figcaption>
      </figure>
      <div className="terra-horizon terra-horizon-night" aria-hidden="true" />
      <div className="terra-horizon terra-horizon-dawn" aria-hidden="true" />
      <div className="terra-horizon terra-horizon-day" aria-hidden="true" />
    </section>

    <section id="recorrido" className="terra-route" aria-labelledby="route-title">
      <div className="terra-route-intro">
        <p className="terra-kicker">El recorrido</p>
        <h2 id="route-title">El cuerpo<br /><em>tiene estaciones.</em></h2>
        <p>No todo empieza haciendo. A veces empieza parando, mirando y dejando que alguien te acompañe.</p>
      </div>
      <ol className="terra-stations">
        {stations.map(([title, text], index) => (
          <li key={title}>
            <span>0{index + 1}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </li>
        ))}
      </ol>
    </section>

    <section className="terra-place" aria-labelledby="place-title">
      <div className="terra-place-image"><img src={aboutStudio} alt="Sala luminosa preparada para el movimiento" loading="lazy" decoding="async" /></div>
      <div className="terra-place-copy">
        <p className="terra-kicker">El lugar</p>
        <h2 id="place-title">Un espacio<br /><em>sin prisa.</em></h2>
        <p>Corpo está en Ronda Sur, Murcia. Un estudio donde fisioterapia y Pilates Máquina conviven con una manera de trabajar cercana y precisa.</p>
        <div className="terra-place-note"><span>Nota de campo / 01</span><p>Pregunta qué necesitas. Nosotros empezamos por escucharlo.</p></div>
      </div>
    </section>

    <section id="servicios" className="terra-notebook" aria-labelledby="notebook-title">
      <div className="terra-notebook-head">
        <p className="terra-kicker">Cuaderno de trabajo</p>
        <h2 id="notebook-title">Lo que podemos<br /><em>hacer contigo.</em></h2>
      </div>
      <div className="terra-notebook-list">
        {services.map(([title, text, image], index) => (
          <details key={title} open={index === 0}>
            <summary><span>0{index + 1}</span><strong>{title}</strong><b aria-hidden="true">+</b></summary>
            <div className="terra-service-detail"><img src={image} alt="" loading="lazy" /><p>{text}</p></div>
          </details>
        ))}
      </div>
    </section>

    <section id="visita" className="terra-visit" aria-labelledby="visit-title">
      <div className="terra-map-composition">
        <CorpoMap variant="terra" className="terra-map-sheet" />
        <div className="terra-map-caption" aria-hidden="true"><span>Ronda Sur</span><span>Murcia / 30010</span></div>
      </div>
      <div className="terra-visit-info">
        <p className="terra-kicker">Destino</p>
        <h2 id="visit-title">Aquí<br /><em>estamos.</em></h2>
        <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
        <p>Reserva directamente o escríbenos para contarnos qué necesitas.</p>
        <div className="terra-contact-links">
          <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a Corpo en Google Maps (nueva pestaña)">Cómo llegar <span aria-hidden="true">↗</span></a>
          <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a>
          <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
          <a href={corpo.phoneUrl}>{corpo.phone} <span aria-hidden="true">↗</span></a>
          <a href={corpo.emailUrl}>{corpo.email} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <footer className="terra-footer">
      <Link to="/#proposal-terra" className="terra-logo" aria-label="Volver a la propuesta Terra">CORPO</Link>
      <span>Hecho con cuidado en Murcia</span>
      <a href={corpo.instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
    </footer>
  </main>
);

export default Terra;
