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
  ["Ubicar", "Corpo está en la calle Pedáneo José Sánchez Mompeán, en Ronda Sur."],
  ["Explorar", "Conocer la fisioterapia avanzada y el Pilates Máquina que presenta la clínica."],
  ["Preguntar", "Consultar por las modalidades de Pilates y otros recursos publicados."],
  ["Llegar", "Abrir las indicaciones antes de desplazarte o contactar por teléfono."],
];

const services = [
  ["Fisioterapia avanzada", "Atención de fisioterapia, distinta de las clases de Pilates Máquina.", fisio],
  ["Pilates Máquina", "Práctica con máquina en modalidad individual o en grupos reducidos.", pilates],
  ["Presoterapia", "Un recurso citado por Corpo; no es una modalidad de Pilates.", recovery],
  ["Otras tecnologías", "Ondas de choque y diatermia son otros recursos que puedes preguntar por separado.", aboutStudio],
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
        <p>Un recorrido por la información práctica: dónde está Corpo, qué publica y cómo contactar.</p>
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
        <p>Corpo está en Ronda Sur, Murcia. Su perfil público reúne fisioterapia avanzada, Pilates Máquina y canales de contacto directo.</p>
        <div className="terra-place-note"><span>Nota de campo / 01</span><p>La dirección de la calle está publicada; confirma el portal en el mapa antes de venir.</p></div>
      </div>
    </section>

    <section id="servicios" className="terra-notebook" aria-labelledby="notebook-title">
      <div className="terra-notebook-head">
        <p className="terra-kicker">Cuaderno de trabajo</p>
        <h2 id="notebook-title">Lo que puedes<br /><em>conocer aquí.</em></h2>
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
