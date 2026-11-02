import { useRef } from "react";
import { Link } from "react-router-dom";
import fisioPhoto from "@/assets/service-fisio.jpg";
import pilatesPhoto from "@/assets/service-pilates.jpg";
import heroPhoto from "@/assets/hero-reformer.jpg";
import studioPhoto from "@/assets/about-studio.jpg";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { CorpoMedia } from "@/components/corpo/CorpoMedia";
import { useReveal } from "@/hooks/use-reveal";
import { corpo } from "@/lib/corpo";
import "./uniforme.css";

const pilatesSteps = [
  { title: "Primera clase", text: "Conoces la máquina y vemos desde dónde partes." },
  { title: "Grupo reducido", text: "Pocas personas por clase para poder corregirte de cerca." },
  { title: "Progresión", text: "Ajustamos muelles, apoyos y ejercicios a medida que avanzas." },
];

const fisioTools = [
  { title: "Ecografía", text: "Para ver la lesión durante la valoración." },
  { title: "Terapia manual", text: "El trabajo con las manos, en el centro." },
  { title: "Diatermia", text: "Tecnología que podemos sumar al tratamiento." },
  { title: "Ondas de choque", text: "Otra herramienta disponible en la clínica." },
  { title: "Presoterapia", text: "Para la recuperación y la circulación." },
];

const Uniforme = () => {
  const pageRef = useRef<HTMLElement>(null);
  useReveal(pageRef, ".uni-reveal");

  return (
    <main ref={pageRef} className="uni-page">
      <section className="uni-hero" aria-labelledby="uni-title">
        <header className="uni-nav">
          <Link to="/#proposal-uniforme" className="uni-logo" aria-label="Volver a las propuestas de Corpo">
            <span>corpo</span>
            <small>fisioterapia · pilates</small>
          </Link>
          <nav aria-label="Secciones">
            <a href="#pilates">Pilates</a>
            <a href="#fisioterapia">Fisioterapia</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="uni-phone" href={corpo.phoneUrl}>{corpo.phone}</a>
        </header>

        <div className="uni-hero-body">
          <div className="uni-hero-copy">
            <p className="uni-eyebrow">Clínica en Ronda Sur · Murcia</p>
            <h1 id="uni-title">
              <span>Fisioterapia</span>
              <span className="uni-plus" aria-label="y">+</span>
              <span>Pilates</span>
            </h1>
            <p className="uni-hero-text">Tratamos la lesión y te ayudamos a moverte mejor después. Todo en el mismo sitio y con el mismo equipo.</p>

            <div className="uni-hero-actions">
              <a className="uni-cta" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">
                Pedir cita <span aria-hidden="true">↗</span>
              </a>
              <a className="uni-cta uni-cta--outline" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="uni-hero-services">
            <a className="uni-ticket" href="#fisioterapia">
              <img src={fisioPhoto} alt="" />
              <span>
                <strong>Fisioterapia</strong>
                <small>Con ecógrafo en consulta</small>
              </span>
              <span className="uni-ticket-arrow" aria-hidden="true">↓</span>
            </a>
            <a className="uni-ticket" href="#pilates">
              <img src={pilatesPhoto} alt="" />
              <span>
                <strong>Pilates Máquina</strong>
                <small>En grupos reducidos</small>
              </span>
              <span className="uni-ticket-arrow" aria-hidden="true">↓</span>
            </a>
            <figure className="uni-hero-photo">
              <img src={heroPhoto} alt="Sala de Pilates con máquina Reformer" fetchPriority="high" />
            </figure>
          </div>
        </div>
      </section>

      <section id="pilates" className="uni-pilates" aria-labelledby="uni-pilates-title">
        <div className="uni-pilates-intro uni-reveal">
          <p className="uni-eyebrow">Pilates Máquina</p>
          <h2 id="uni-pilates-title">Moverte bien también se entrena.</h2>
          <p>
            Clases sobre Reformer en las que la máquina te sostiene y te da resistencia a la vez. Sirve tanto si vienes de una
            lesión como si simplemente quieres ganar fuerza y movilidad.
          </p>
          <a className="uni-cta uni-cta--green" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar Pilates ↗</a>
        </div>

        <div className="uni-pilates-board uni-reveal">
          <figure className="uni-stitch-frame">
            <img src={pilatesPhoto} alt="Alumna en una clase de Pilates Máquina" loading="lazy" decoding="async" />
          </figure>
          <ol className="uni-steps">
            {pilatesSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="fisioterapia" className="uni-fisio" aria-labelledby="uni-fisio-title">
        <div className="uni-fisio-head uni-reveal">
          <p className="uni-eyebrow">Fisioterapia</p>
          <h2 id="uni-fisio-title">Con ecógrafo, <em>no a ciegas.</em></h2>
        </div>

        <div className="uni-eco uni-reveal">
          <div className="uni-eco-screen">
            <CorpoMedia slot="ecografia" fallback={fisioPhoto} alt="Fisioterapia en la clínica Corpo" />
          </div>
          <div className="uni-eco-copy">
            <h3>Ecografía en la propia consulta</h3>
            <p>
              Durante la valoración usamos el ecógrafo para ver en tiempo real el tejido que te molesta. Así te explicamos qué
              pasa con una imagen delante y podemos revisar cómo evoluciona en las siguientes sesiones.
            </p>
            <a className="uni-cta" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita de fisioterapia ↗</a>
          </div>
        </div>

        <ul className="uni-tools">
          {fisioTools.map((tool) => (
            <li key={tool.title} className="uni-reveal">
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contacto" className="uni-contact" aria-labelledby="uni-contact-title">
        <div className="uni-contact-copy uni-reveal">
          <p className="uni-eyebrow">Contacto</p>
          <h2 id="uni-contact-title">Estamos en Ronda Sur.</h2>
          <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          <ul className="uni-contact-list">
            <li><a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer"><span>Reserva online</span><span aria-hidden="true">↗</span></a></li>
            <li><a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><span>{corpo.phone}</span></a></li>
            <li><a href={corpo.phoneUrl}><span>Llamar</span><span>{corpo.phone}</span></a></li>
            <li><a href={corpo.emailUrl}><span>Email</span><span>{corpo.email}</span></a></li>
            <li><a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer"><span>Cómo llegar</span><span aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
        <div className="uni-contact-map uni-reveal">
          <CorpoMap variant="uniforme" className="uni-map" />
          <img src={studioPhoto} alt="" loading="lazy" decoding="async" />
        </div>
      </section>

      <footer className="uni-footer">
        <span className="uni-logo"><span>corpo</span></span>
        <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
      </footer>

      <a className="uni-floating" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita ↗</a>
    </main>
  );
};

export default Uniforme;
