import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import { corpo } from "@/lib/corpo";
import "./atelier.css";

const services = [
  {
    title: "Fisioterapia avanzada",
    detail: "Fisioterapia avanzada y terapia manual con atención personalizada.",
    image: fisio,
  },
  {
    title: "Pilates Máquina",
    detail: "Movimiento guiado con una progresión adaptada a cada persona.",
    image: pilates,
  },
  {
    title: "Recuperación",
    detail: "Recuperación dentro de una atención cercana y personalizada.",
    image: recovery,
  },
];

const secondaryServices = ["Terapia manual", "Ondas de choque", "Diatermia", "Presoterapia"];

const Atelier = () => (
  <main className="atelier-page">
    <header className="atelier-nav">
      <Link to="/#proposal-atelier" className="atelier-logo" aria-label="Volver a la propuesta Atelier">CORPO</Link>
      <nav aria-label="Navegación principal">
        <a href="#estudio">El estudio</a>
        <a href="#servicios">Servicios</a>
        <a href="#visita">Visita</a>
      </nav>
      <a className="atelier-nav-action" href="#visita">Conócenos <span aria-hidden="true">↗</span></a>
    </header>

    <section className="atelier-opening" aria-labelledby="atelier-title">
      <div className="atelier-opening-copy">
        <p className="atelier-location">Ronda Sur / Murcia</p>
        <h1 id="atelier-title">Un lugar para<br /><em>volver a ti.</em></h1>
        <p className="atelier-lead">Fisioterapia avanzada, Pilates Máquina y recuperación con atención personalizada en Ronda Sur.</p>
        <a className="atelier-primary-action" href="#estudio">Entrar en Corpo <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="atelier-opening-image">
        <span className="atelier-image-index">CORPO / 001</span>
        <img src={heroReformer} alt="Sala luminosa con una máquina de Pilates" />
        <figcaption>El movimiento como práctica diaria</figcaption>
      </figure>
      <p className="atelier-vertical-label">Fisioterapia · Pilates · Murcia</p>
    </section>

    <div className="atelier-info-strip" role="group" aria-label="Información de la clínica">
      <span>Clínica Corpo</span>
      <span>{corpo.addressLines[0]}</span>
      <a href={corpo.phoneUrl}>{corpo.phone}</a>
    </div>

    <section id="estudio" className="atelier-studio">
      <div className="atelier-section-title">
        <p>El estudio</p>
        <h2>La clínica<br /><em>como espacio.</em></h2>
      </div>
      <div className="atelier-studio-content">
        <div className="atelier-studio-image">
          <img src={aboutStudio} alt="Sala luminosa con camilla y plantas" loading="lazy" />
          <span>Una mirada de cerca</span>
        </div>
        <div className="atelier-studio-copy">
          <p className="atelier-large-copy">Un espacio cercano para cuidar el cuerpo de forma personal.</p>
          <p>Corpo reúne fisioterapia avanzada, Pilates Máquina y recuperación en Ronda Sur, Murcia.</p>
          <p>La atención y la progresión se adaptan a cada persona.</p>
          <a href="#servicios" className="atelier-text-link">Ver servicios <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>

    <section id="servicios" className="atelier-services">
      <div className="atelier-services-heading">
        <p>Lo que hacemos</p>
        <h2>Cada cuerpo<br /><em>tiene su ritmo.</em></h2>
      </div>
      <div className="atelier-service-list">
        {services.map((service, index) => (
          <article key={service.title} className="atelier-service-row">
            <span className="atelier-service-number">0{index + 1}</span>
            <div className="atelier-service-name">
              <h3>{service.title}</h3>
              <img src={service.image} alt="" loading="lazy" />
            </div>
            <p>{service.detail}</p>
            <a
              className="atelier-service-mark"
              href={corpo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar sobre ${service.title} por WhatsApp`}
            >
              Consultar <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
        <div className="atelier-secondary-services">
          <p>También disponible</p>
          <ul>
            {secondaryServices.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="atelier-practice">
      <div className="atelier-practice-copy">
        <p>Principios de Corpo</p>
        <h2>Cuidado<br /><em>personal.</em></h2>
        <p className="atelier-practice-lead">Atención personalizada y una progresión adaptada a cada persona.</p>
      </div>
      <div className="atelier-practice-notes">
        <div><span>01</span><h3>Cercanía</h3><p>Un entorno cercano en Ronda Sur, Murcia.</p></div>
        <div><span>02</span><h3>Atención</h3><p>Un cuidado personalizado para cada persona.</p></div>
        <div><span>03</span><h3>Progresión</h3><p>Una progresión adaptada a cada persona.</p></div>
      </div>
    </section>

    <section id="visita" className="atelier-visit">
      <div>
        <p>La visita</p>
        <h2>Ven a conocer<br /><em>Corpo.</em></h2>
      </div>
      <div className="atelier-visit-details">
        <p>Estamos en Ronda Sur, Murcia. Puedes escribirnos, llamarnos o reservar online para dar el primer paso.</p>
        <div className="atelier-visit-actions">
          <a className="atelier-primary-action" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar online <span aria-hidden="true">↗</span></a>
          <a className="atelier-text-link" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="atelier-text-link" href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a>
        </div>
        <dl>
          <div><dt>Dirección</dt><dd>{corpo.addressLines.map((line) => <span key={line}>{line}</span>)}</dd></div>
          <div><dt>Contacto</dt><dd><a href={corpo.phoneUrl}>{corpo.phone}</a><a href={corpo.emailUrl}>{corpo.email}</a></dd></div>
        </dl>
      </div>
    </section>

    <footer className="atelier-footer">
      <Link to="/#proposal-atelier" className="atelier-logo" aria-label="Volver a la propuesta Atelier">CORPO</Link>
      <span>Fisioterapia · Pilates Máquina · Murcia</span>
      <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
    </footer>
  </main>
);

export default Atelier;
