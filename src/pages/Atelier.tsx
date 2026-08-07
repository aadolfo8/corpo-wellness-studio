import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import "./atelier.css";

const services = [
  {
    title: "Fisioterapia avanzada",
    detail: "Valoración, tratamiento manual y ejercicio terapéutico para entender lo que ocurre y acompañar tu recuperación.",
    image: fisio,
  },
  {
    title: "Pilates Máquina",
    detail: "Sesiones en Reformer para trabajar fuerza, movilidad, postura y control con la guía de profesionales.",
    image: pilates,
  },
  {
    title: "Recuperación",
    detail: "Un proceso progresivo para volver a moverte con más confianza, desde el tratamiento hasta tu actividad.",
    image: recovery,
  },
];

const Atelier = () => (
  <main className="atelier-page">
    <header className="atelier-nav">
      <Link to="/" className="atelier-logo" aria-label="Volver a propuestas">CORPO</Link>
      <nav aria-label="Navegación principal">
        <a href="#estudio">El estudio</a>
        <a href="#servicios">Servicios</a>
        <a href="#visita">Visita</a>
      </nav>
      <a className="atelier-nav-action" href="#visita">Conócenos <span>↗</span></a>
    </header>

    <section className="atelier-opening" aria-labelledby="atelier-title">
      <div className="atelier-opening-copy">
        <p className="atelier-location">Ronda Sur / Murcia</p>
        <h1 id="atelier-title">Un lugar para<br /><em>volver a ti.</em></h1>
        <p className="atelier-lead">Fisioterapia y Pilates Máquina en un espacio pensado para escuchar al cuerpo, entenderlo y acompañarlo.</p>
        <a className="atelier-primary-action" href="#estudio">Entrar en Corpo <span>↓</span></a>
      </div>
      <figure className="atelier-opening-image">
        <span className="atelier-image-index">CORPO / 001</span>
        <img src={heroReformer} alt="Sala de Pilates Reformer de Corpo" />
        <figcaption>El movimiento como práctica diaria</figcaption>
      </figure>
      <p className="atelier-vertical-label">Fisioterapia · Pilates · Murcia</p>
    </section>

    <div className="atelier-info-strip" aria-label="Información de la clínica">
      <span>Clínica Corpo</span>
      <span>C. Pedáneo José Sánchez Mompeán, 16, Bajo</span>
      <span>624 06 03 40</span>
    </div>

    <section id="estudio" className="atelier-studio">
      <div className="atelier-section-title">
        <p>El estudio</p>
        <h2>La clínica<br /><em>como espacio.</em></h2>
      </div>
      <div className="atelier-studio-content">
        <div className="atelier-studio-image">
          <img src={aboutStudio} alt="Interior del estudio Corpo en Murcia" loading="lazy" />
          <span>Una mirada de cerca</span>
        </div>
        <div className="atelier-studio-copy">
          <p className="atelier-large-copy">Corpo nace para que cuidar el cuerpo no se sienta como una tarea más.</p>
          <p>Un estudio de fisioterapia y Pilates Máquina en Ronda Sur, con un trato cercano y una forma de trabajar adaptada a cada persona.</p>
          <p>Antes de pedirle más al cuerpo, lo observamos. A partir de ahí construimos una práctica que puedas sostener.</p>
          <a href="#servicios" className="atelier-text-link">Descubrir el método <span>↘</span></a>
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
            <span className="atelier-service-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>

    <section className="atelier-practice">
      <div className="atelier-practice-copy">
        <p>Una forma de trabajar</p>
        <h2>Primero<br /><em>escuchar.</em></h2>
        <p className="atelier-practice-lead">Después valorar. Elegir el tratamiento, el ejercicio o la sesión que tiene sentido para ti.</p>
      </div>
      <div className="atelier-practice-notes">
        <div><span>01</span><h3>Entender</h3><p>Qué ocurre y qué necesitas recuperar.</p></div>
        <div><span>02</span><h3>Acompañar</h3><p>Con una guía profesional, cercana y clara.</p></div>
        <div><span>03</span><h3>Progresar</h3><p>A tu ritmo, con un plan que puedas sostener.</p></div>
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
          <a className="atelier-primary-action" href="https://appclinicacorpo.viday.es/" target="_blank" rel="noreferrer">Reservar online <span>↗</span></a>
          <a className="atelier-text-link" href="https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4" target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a>
        </div>
        <dl>
          <div><dt>Dirección</dt><dd>C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />30010 San Benito - Patiño, Murcia</dd></div>
          <div><dt>Contacto</dt><dd><a href="tel:+34624060340">624 06 03 40</a><br /><a href="mailto:clinicacorporondasur@gmail.com">clinicacorporondasur@gmail.com</a></dd></div>
        </dl>
      </div>
    </section>

    <footer className="atelier-footer">
      <Link to="/" className="atelier-logo">CORPO</Link>
      <span>Fisioterapia · Pilates Máquina · Murcia</span>
      <a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </footer>
  </main>
);

export default Atelier;
