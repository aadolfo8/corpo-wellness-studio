import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import { corpo } from "@/lib/corpo";
import "./clinical.css";

const serviceMatrix = [
  ["Fisioterapia avanzada", "Servicio confirmado", "fisio"],
  ["Pilates Máquina", "Servicio confirmado", "pilates"],
  ["Terapia manual", "Servicio confirmado", "manual"],
  ["Recuperación", "Servicio confirmado", "recovery"],
  ["Ondas de choque · Diatermia · Presoterapia", "Tecnologías confirmadas", "support"],
];

const Clinical = () => (
  <main className="clinical-page">
    <aside className="clinical-index">
      <Link to="/#proposal-clinical" className="clinical-brand" aria-label="Volver a la propuesta Clinical">CORPO<span>/</span></Link>
      <p className="clinical-index-label">Clinical index / 06</p>
      <nav aria-label="Índice de la página">
        <a href="#entrada"><span>00</span>Entrada</a>
        <a href="#servicios"><span>01</span>Atención</a>
        <a href="#enfoque"><span>02</span>Enfoque</a>
        <a href="#contacto"><span>03</span>Contacto</a>
      </nav>
      <div className="clinical-index-footer"><span>Murcia / ES</span><span>Ronda Sur</span></div>
    </aside>

    <div className="clinical-document">
      <header className="clinical-topline">
        <span>Clínica de fisioterapia + Pilates Máquina</span>
        <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reserva online (nueva pestaña)">Reserva online <b aria-hidden="true">↗</b></a>
      </header>

      <section id="entrada" className="clinical-opening" aria-labelledby="clinical-title">
        <div className="clinical-opening-copy">
          <p className="clinical-code">Registro 00 / Corpo Murcia</p>
          <h1 id="clinical-title">Tu cuerpo<br />no es un<br /><em>protocolo.</em></h1>
          <p>Atención personalizada y una progresión adaptada a cada persona.</p>
        </div>
        <div className="clinical-opening-data">
          <div className="clinical-data-item"><span>Ubicación</span><strong>Ronda Sur<br />Murcia</strong></div>
          <div className="clinical-data-item"><span>Enfoque</span><strong>Fisioterapia<br />+ movimiento</strong></div>
          <div className="clinical-data-item clinical-data-signal"><span>Reserva</span><strong><i /> Online o directa</strong></div>
        </div>
        <div className="clinical-opening-mark" aria-hidden="true">CORPO<br /><span>+</span></div>
      </section>

      <section id="servicios" className="clinical-matrix" aria-labelledby="matrix-title">
        <div className="clinical-section-intro"><p className="clinical-code">01 / Servicios confirmados</p><h2 id="matrix-title">Encuentra<br /><em>tu entrada.</em></h2><p>Corpo combina fisioterapia y Pilates Máquina en un entorno cercano, con atención personalizada y una progresión adaptada a cada persona.</p></div>
        <div className="clinical-service-data">
          <div className="clinical-table-wrap">
            <table>
              <caption className="sr-only">Servicios y tecnologías confirmados de Corpo</caption>
              <thead><tr><th scope="col">Servicio o tecnología</th><th scope="col">Registro</th></tr></thead>
              <tbody>
                {serviceMatrix.map(([service, record, type]) => <tr key={service}><th scope="row"><span className={`clinical-service-dot clinical-dot-${type}`} aria-hidden="true" />{service}</th><td>{record}</td></tr>)}
              </tbody>
            </table>
          </div>
          <ul className="clinical-mobile-records" aria-label="Servicios y tecnologías confirmados de Corpo">
            {serviceMatrix.map(([service, record, type]) => <li key={service}><span className={`clinical-service-dot clinical-dot-${type}`} aria-hidden="true" /><div><span>Servicio o tecnología</span><strong>{service}</strong><small>{record}</small></div></li>)}
          </ul>
        </div>
      </section>

      <section id="enfoque" className="clinical-first-visit" aria-labelledby="first-visit-title">
        <div className="clinical-first-image"><img src={aboutStudio} alt="Sala luminosa con plantas" loading="lazy" /><span>Imagen de ambiente</span></div>
        <div className="clinical-first-copy">
          <p className="clinical-code">02 / Enfoque</p>
          <h2 id="first-visit-title">Una atención<br /><em>adaptada.</em></h2>
          <ul className="clinical-checklist">
            <li><span>A</span><div><strong>Atención personalizada</strong><p>Fisioterapia y Pilates Máquina en un entorno cercano.</p></div></li>
            <li><span>B</span><div><strong>Progresión adaptada</strong><p>Una forma de acompañar adaptada a cada persona.</p></div></li>
            <li><span>C</span><div><strong>Conversación directa</strong><p>Contacto por teléfono, WhatsApp, email o reserva online.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="clinical-principles" aria-label="Principios de Corpo">
        <p className="clinical-code">Una forma de trabajar</p>
        <div><strong>Cercanía</strong><span>en la atención.</span></div>
        <div><strong>Adaptación</strong><span>en la progresión.</span></div>
        <div><strong>Claridad</strong><span>para continuar.</span></div>
      </section>

      <section id="contacto" className="clinical-dossier" aria-labelledby="dossier-title">
        <div className="clinical-dossier-heading"><p className="clinical-code">03 / Abrir un canal</p><h2 id="dossier-title">Hablemos de<br /><em>tu siguiente paso.</em></h2></div>
        <div className="clinical-dossier-content">
          <div className="clinical-contact-list">
            <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Elegir cita online (nueva pestaña)"><span>Reserva</span><strong>Elegir cita online</strong><b aria-hidden="true">↗</b></a>
            <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)"><span>WhatsApp</span><strong>Escribir un mensaje</strong><b aria-hidden="true">↗</b></a>
            <a href={corpo.phoneUrl}><span>Teléfono</span><strong>{corpo.phone}</strong><b aria-hidden="true">↗</b></a>
            <a href={corpo.emailUrl}><span>Email</span><strong>Enviar un email</strong><b aria-hidden="true">↗</b></a>
            <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir indicaciones para llegar (nueva pestaña)"><span>Visita</span><strong>Cómo llegar</strong><b aria-hidden="true">↗</b></a>
          </div>
          <address><a href={corpo.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver la ubicación de Corpo (nueva pestaña)">{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</a><br /><a href={corpo.emailUrl}>{corpo.email}</a></address>
        </div>
      </section>

      <footer className="clinical-footer"><Link to="/#proposal-clinical" className="clinical-brand" aria-label="Volver a la propuesta Clinical">CORPO<span>/</span></Link><span>Fisioterapia · Pilates Máquina · Murcia</span><a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </div>
  </main>
);

export default Clinical;
