import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import "./terra.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const stations = [
  ["Llegar", "Dejar el ruido fuera y llegar con tiempo para ti."],
  ["Observar", "Escuchar qué ocurre antes de elegir qué hacer."],
  ["Mover", "Encontrar el gesto, la carga o la práctica que necesitas."],
  ["Volver", "Llevarte una forma posible de seguir cuidándote."],
];

const services = [
  ["Fisioterapia avanzada", "Valoración y tratamiento para dolor, lesión o recuperación funcional.", fisio],
  ["Pilates Máquina", "Trabajo en Reformer para fuerza, movilidad, postura y control corporal.", pilates],
  ["Terapia manual", "Trabajo manual para acompañar procesos de movilidad y recuperación.", recovery],
  ["Diatermia, ondas de choque y presoterapia", "Tecnología de apoyo cuando la valoración indica que puede acompañar el proceso.", aboutStudio],
];

const schedule = [
  ["Entre semana", "Consultar disponibilidad"],
  ["Fin de semana", "Consultar disponibilidad"],
];

const Terra = () => (
  <main className="terra-page">
    <header className="terra-topbar">
      <Link to="/" className="terra-logo" aria-label="Volver a propuestas">CORPO</Link>
      <span className="terra-season">Una clínica en Ronda Sur</span>
      <a href="#visita" className="terra-top-link">Visitar el estudio <span>↘</span></a>
    </header>

    <section className="terra-cyclorama" aria-labelledby="terra-title">
      <div className="terra-cyclorama-copy">
        <p className="terra-kicker">Fisioterapia · Pilates Máquina · Murcia</p>
        <h1 id="terra-title">Una pausa<br />que también<br /><em>avanza.</em></h1>
        <p>Un estudio para volver a escuchar tu cuerpo, moverte con atención y encontrar tu propio ritmo.</p>
        <a className="terra-round-link" href="#recorrido">Conocer<br />el recorrido <span>↓</span></a>
      </div>
      <figure className="terra-cyclorama-image">
        <img src={heroReformer} alt="Sala luminosa de Pilates Reformer en Corpo" />
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
      <div className="terra-place-image"><img src={aboutStudio} alt="Interior del estudio Corpo" loading="lazy" /></div>
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
      <div className="terra-postcard">
        <div className="terra-postcard-stamp">MURCIA<br />30010</div>
        <p className="terra-kicker">Una dirección para volver</p>
        <h2 id="visit-title">Ven a<br /><em>Corpo.</em></h2>
        <address>C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />30010 San Benito — Patiño, Murcia</address>
        <a className="terra-map-link" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir la ubicación en Google Maps (nueva pestaña)">Abrir la ubicación <span aria-hidden="true">↗</span></a>
      </div>
      <div className="terra-visit-info">
        <p id="terra-schedule-title" className="terra-kicker">Horario y contacto</p>
        <dl className="terra-schedule" aria-labelledby="terra-schedule-title">
          {schedule.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}
        </dl>
        <div className="terra-contact-links">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
          <a href="tel:+34624060340">624 06 03 40 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <footer className="terra-footer">
      <Link to="/" className="terra-logo">CORPO</Link>
      <span>Hecho con cuidado en Murcia</span>
      <a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </footer>
  </main>
);

export default Terra;
