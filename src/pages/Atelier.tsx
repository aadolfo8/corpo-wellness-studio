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
    detail: "Atención de fisioterapia; una línea diferente de las sesiones de Pilates Máquina.",
    image: fisio,
  },
  {
    title: "Pilates Máquina",
    detail: "Práctica con máquina en sesiones individuales o grupos reducidos.",
    image: pilates,
  },
  {
    title: "Otros recursos",
    detail: "Diatermia, ondas de choque y presoterapia son recursos citados por Corpo; no son modalidades de Pilates.",
    image: recovery,
  },
];

const secondaryServices = ["Ondas de choque", "Diatermia", "Presoterapia"];

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
        <p className="atelier-lead">Una mirada editorial a la fisioterapia avanzada, el Pilates Máquina y los canales de Corpo en Ronda Sur.</p>
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
          <p>La clínica comunica fisioterapia avanzada y Pilates Máquina como sus servicios principales en Ronda Sur, Murcia.</p>
          <p>La diferencia está en el tipo de oferta: atención de fisioterapia, práctica de Pilates y recursos específicos que puedes preguntar por separado.</p>
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
          <p>También mencionado por Corpo</p>
          <ul>
            {secondaryServices.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="atelier-practice">
      <div className="atelier-practice-copy">
        <p>Para recorrer la página</p>
        <h2>Una oferta,<br /><em>varias preguntas.</em></h2>
        <p className="atelier-practice-lead">Estas notas ayudan a distinguir qué preguntar; no describen el método clínico de Corpo.</p>
      </div>
      <div className="atelier-practice-notes">
        <div><span>01</span><h3>Fisioterapia</h3><p>Un servicio de atención de la clínica.</p></div>
        <div><span>02</span><h3>Pilates Máquina</h3><p>Individual o en grupo reducido.</p></div>
        <div><span>03</span><h3>Otros recursos</h3><p>Diatermia, ondas de choque y presoterapia.</p></div>
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
