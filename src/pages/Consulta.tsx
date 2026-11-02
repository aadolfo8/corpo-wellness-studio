import { useRef } from "react";
import { Link } from "react-router-dom";
import fisioPhoto from "@/assets/service-fisio.jpg";
import pilatesPhoto from "@/assets/service-pilates.jpg";
import heroPhoto from "@/assets/hero-reformer.jpg";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { CorpoMedia } from "@/components/corpo/CorpoMedia";
import { useReveal } from "@/hooks/use-reveal";
import { corpo } from "@/lib/corpo";
import "./consulta.css";

const services = [
  {
    id: "pilates",
    name: "Pilates Máquina",
    image: pilatesPhoto,
    alt: "Alumna en una máquina Reformer",
    points: ["Clases sobre Reformer", "Grupos reducidos", "También si nunca has hecho Pilates"],
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    image: fisioPhoto,
    alt: "Fisioterapeuta tratando el hombro de una paciente",
    points: ["Valoración con ecógrafo", "Terapia manual", "Diatermia, ondas de choque y presoterapia"],
  },
];


const Consulta = () => {
  const pageRef = useRef<HTMLElement>(null);
  useReveal(pageRef, ".con-reveal");

  return (
    <main ref={pageRef} className="con-page">
      <header className="con-nav">
        <Link to="/#proposal-consulta" className="con-logo" aria-label="Volver a las propuestas de Corpo">
          <span className="con-logo-mark" aria-hidden="true" />corpo
        </Link>
        <nav aria-label="Secciones">
          <a href="#pilates">Pilates</a>
          <a href="#fisioterapia">Fisioterapia</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="con-nav-actions">
          <a className="con-nav-phone" href={corpo.phoneUrl}>{corpo.phone}</a>
          <a className="con-btn" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita</a>
        </div>
      </header>

      <section className="con-hero" aria-labelledby="con-title">
        <div className="con-hero-top">
          <h1 id="con-title">Tu fisio y tu Pilates, <span>en el mismo sitio.</span></h1>
          <div className="con-hero-aside">
            <p>Clínica de fisioterapia y estudio de Pilates Máquina en Ronda Sur, Murcia.</p>
            <a className="con-btn con-btn--big" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita online <span aria-hidden="true">→</span></a>
            <a className="con-link" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">o escríbenos por WhatsApp ↗</a>
          </div>
        </div>

        <div className="con-service-cards">
          {services.map((service, index) => (
            <article key={service.id} className="con-service-card">
              <img src={service.image} alt={service.alt} fetchPriority="high" />
              <div className="con-service-body">
                <span className="con-service-num">0{index + 1}</span>
                <h2>{service.name}</h2>
                <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <a className="con-service-link" href={`#${service.id}`}>Saber más <span aria-hidden="true">↓</span></a>
              </div>
            </article>
          ))}
        </div>

        <ul className="con-facts" aria-label="Lo esencial">
          <li><strong>Ecógrafo</strong> en la clínica</li>
          <li><strong>Reformer</strong> en grupos reducidos</li>
          <li><strong>Reserva</strong> online o por WhatsApp</li>
        </ul>
      </section>

      <section id="pilates" className="con-pilates" aria-labelledby="con-pilates-title">
        <div className="con-split con-reveal">
          <div>
            <p className="con-label">Pilates Máquina</p>
            <h2 id="con-pilates-title">Pilates en grupos reducidos.</h2>
            <p className="con-body">
              Trabajamos sobre Reformer: una máquina con muelles que asiste o añade resistencia a cada movimiento. Es una forma
              segura de ganar fuerza, control y movilidad, empieces desde cero o vengas de fisioterapia.
            </p>
          </div>
          <figure className="con-pilates-photo">
            <img src={heroPhoto} alt="Sala de Pilates Máquina de Corpo" loading="lazy" decoding="async" />
          </figure>
        </div>
        <a className="con-btn con-btn--big con-reveal" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar clase de Pilates <span aria-hidden="true">→</span></a>
      </section>

      <section id="fisioterapia" className="con-fisio" aria-labelledby="con-fisio-title">
        <div className="con-eco con-reveal">
          <div className="con-eco-copy">
            <p className="con-label con-label--light">Fisioterapia · Ecografía</p>
            <h2 id="con-fisio-title">Tenemos ecógrafo. Y lo usamos en tu valoración.</h2>
            <p className="con-body">
              Con la ecografía vemos músculos, tendones y ligamentos en movimiento y en tiempo real. Te enseñamos la imagen,
              te explicamos qué ocurre y la usamos de referencia para seguir tu evolución.
            </p>
            <dl className="con-eco-facts">
              <div><dt>Cuándo</dt><dd>En la misma sesión de fisioterapia</dd></div>
              <div><dt>Qué ves</dt><dd>La zona que te molesta, en pantalla</dd></div>
              <div><dt>Radiación</dt><dd>Ninguna</dd></div>
            </dl>
          </div>
          <figure className="con-eco-figure">
            <CorpoMedia slot="ecografia" fallback={fisioPhoto} alt="Fisioterapia en la clínica Corpo" />
          </figure>
        </div>

        <div className="con-fisio-grid">
          <article className="con-reveal">
            <h3>Terapia manual</h3>
            <p>La base del tratamiento: valoración y trabajo con las manos sobre la zona afectada.</p>
          </article>
          <article className="con-reveal">
            <h3>Diatermia</h3>
            <p>Tecnología que podemos combinar con el tratamiento cuando el caso lo pide.</p>
          </article>
          <article className="con-reveal">
            <h3>Ondas de choque</h3>
            <p>Otra herramienta disponible en la clínica, que valoramos contigo.</p>
          </article>
          <article className="con-reveal">
            <h3>Presoterapia</h3>
            <p>Un recurso más que podemos incluir en la fase de recuperación.</p>
          </article>
        </div>
        <a className="con-btn con-btn--big con-reveal" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita de fisioterapia <span aria-hidden="true">→</span></a>
      </section>

      <section id="contacto" className="con-contact" aria-labelledby="con-contact-title">
        <CorpoMap variant="consulta" className="con-map" />
        <div className="con-contact-card con-reveal">
          <p className="con-label">Contacto</p>
          <h2 id="con-contact-title">Corpo, Ronda Sur.</h2>
          <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          <dl>
            <div><dt>Teléfono y WhatsApp</dt><dd><a href={corpo.phoneUrl}>{corpo.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={corpo.emailUrl}>{corpo.email}</a></dd></div>
          </dl>
          <div className="con-contact-actions">
            <a className="con-btn" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita</a>
            <a className="con-btn con-btn--outline" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="con-btn con-btn--outline" href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </div>
      </section>

      <footer className="con-footer">
        <span>© Corpo · Fisioterapia y Pilates Máquina en Murcia</span>
        <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
      </footer>

      <div className="con-mobile-bar">
        <a href={corpo.phoneUrl}>Llamar</a>
        <a className="con-btn" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita</a>
      </div>
    </main>
  );
};

export default Consulta;
