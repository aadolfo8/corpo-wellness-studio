import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import "./clinical.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const serviceMatrix = [
  ["Fisioterapia avanzada", "Dolor, lesión o recuperación funcional", "Valoración · tratamiento · ejercicio", "fisio"],
  ["Pilates Máquina", "Fuerza, movilidad y control corporal", "Sesiones guiadas en Reformer", "pilates"],
  ["Terapia manual", "Movilidad y sobrecargas", "Tratamiento directo", "manual"],
  ["Tecnología de apoyo", "Cuando la valoración lo indica", "Diatermia · ondas de choque · presoterapia", "support"],
];

const Clinical = () => (
  <main className="clinical-page">
    <aside className="clinical-index">
      <Link to="/" className="clinical-brand" aria-label="Volver a propuestas">CORPO<span>/</span></Link>
      <p className="clinical-index-label">Clinical index / 06</p>
      <nav aria-label="Índice de la página">
        <a href="#entrada"><span>00</span>Entrada</a>
        <a href="#servicios"><span>01</span>Atención</a>
        <a href="#primera-visita"><span>02</span>Primera visita</a>
        <a href="#contacto"><span>03</span>Contacto</a>
      </nav>
      <div className="clinical-index-footer"><span>Murcia / ES</span><span>Ronda Sur</span></div>
    </aside>

    <div className="clinical-document">
      <header className="clinical-topline">
        <span>Clínica de fisioterapia + Pilates Máquina</span>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reserva online (nueva pestaña)">Reserva online <b aria-hidden="true">↗</b></a>
      </header>

      <section id="entrada" className="clinical-opening" aria-labelledby="clinical-title">
        <div className="clinical-opening-copy">
          <p className="clinical-code">Registro 00 / Corpo Murcia</p>
          <h1 id="clinical-title">Tu cuerpo<br />no es un<br /><em>protocolo.</em></h1>
          <p>Lo observamos antes de intervenir. Lo acompañamos antes de exigirle más.</p>
        </div>
        <div className="clinical-opening-data">
          <div className="clinical-data-item"><span>Ubicación</span><strong>Ronda Sur<br />Murcia</strong></div>
          <div className="clinical-data-item"><span>Enfoque</span><strong>Fisioterapia<br />+ movimiento</strong></div>
          <div className="clinical-data-item clinical-data-signal"><span>Reserva</span><strong><i /> Online o directa</strong></div>
        </div>
        <div className="clinical-opening-mark" aria-hidden="true">CORPO<br /><span>+</span></div>
      </section>

      <section id="servicios" className="clinical-matrix" aria-labelledby="matrix-title">
        <div className="clinical-section-intro"><p className="clinical-code">01 / Mapa de atención</p><h2 id="matrix-title">Encuentra<br /><em>tu entrada.</em></h2><p>Puedes contarnos qué necesitas. Cuéntanos qué ocurre y empezamos por ahí.</p></div>
        <div className="clinical-table-wrap" tabIndex={0} role="region" aria-label="Tabla de servicios; desliza horizontalmente en pantallas pequeñas">
          <table>
            <caption className="sr-only">Servicios de Clínica Corpo</caption>
            <thead><tr><th scope="col">Servicio</th><th scope="col">Para empezar cuando...</th><th scope="col">Cómo se trabaja</th></tr></thead>
            <tbody>
              {serviceMatrix.map(([service, when, format, type]) => <tr key={service}><th scope="row"><span className={`clinical-service-dot clinical-dot-${type}`} />{service}</th><td>{when}</td><td>{format}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section id="primera-visita" className="clinical-first-visit" aria-labelledby="first-visit-title">
        <div className="clinical-first-image"><img src={aboutStudio} alt="Interior de Clínica Corpo" loading="lazy" /><span>Archivo / espacio de trabajo</span></div>
        <div className="clinical-first-copy">
          <p className="clinical-code">02 / Primera visita</p>
          <h2 id="first-visit-title">Empezamos<br /><em>por escuchar.</em></h2>
          <ol className="clinical-checklist">
            <li><span>01</span><div><strong>Nos cuentas qué ocurre</strong><p>Dolor, lesión, hábitos y qué quieres volver a hacer.</p></div></li>
            <li><span>02</span><div><strong>Valoramos tu punto de partida</strong><p>Movilidad, necesidades y objetivos reales.</p></div></li>
            <li><span>03</span><div><strong>Te proponemos un camino</strong><p>Tratamiento, ejercicio o Pilates Máquina adaptado.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="clinical-principles" aria-label="Principios de Corpo">
        <p className="clinical-code">Una forma de trabajar</p>
        <div><strong>Preguntar</strong><span>antes de prescribir.</span></div>
        <div><strong>Adaptar</strong><span>antes de acelerar.</span></div>
        <div><strong>Acompañar</strong><span>antes de soltar.</span></div>
      </section>

      <section id="contacto" className="clinical-dossier" aria-labelledby="dossier-title">
        <div className="clinical-dossier-heading"><p className="clinical-code">03 / Abrir un canal</p><h2 id="dossier-title">Hablemos de<br /><em>tu siguiente paso.</em></h2></div>
        <div className="clinical-dossier-content">
          <div className="clinical-contact-list">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Elegir cita online (nueva pestaña)"><span>Reserva</span><strong>Elegir cita online</strong><b aria-hidden="true">↗</b></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)"><span>Conversación</span><strong>Escribir por WhatsApp</strong><b aria-hidden="true">↗</b></a>
            <a href="tel:+34624060340"><span>Directo</span><strong>624 06 03 40</strong><b aria-hidden="true">↗</b></a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps (nueva pestaña)"><span>Visita</span><strong>Ver ubicación</strong><b aria-hidden="true">↗</b></a>
          </div>
          <address>C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />30010 San Benito - Patiño, Murcia<br /><a href="mailto:clinicacorporondasur@gmail.com">clinicacorporondasur@gmail.com</a></address>
        </div>
      </section>

      <footer className="clinical-footer"><Link to="/" className="clinical-brand">CORPO<span>/</span></Link><span>Fisioterapia · Pilates Máquina · Murcia</span><a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </div>
  </main>
);

export default Clinical;
