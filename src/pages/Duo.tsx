import { useRef } from "react";
import { Link } from "react-router-dom";
import fisioPhoto from "@/assets/service-fisio.jpg";
import pilatesPhoto from "@/assets/service-pilates.jpg";
import reformerPhoto from "@/assets/hero-reformer.jpg";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { CorpoMedia } from "@/components/corpo/CorpoMedia";
import { useReveal } from "@/hooks/use-reveal";
import { corpo } from "@/lib/corpo";
import type { MediaSlot } from "@/lib/instagram-media";
import "./duo.css";

const pilatesSteps: { title: string; text: string; slot: MediaSlot }[] = [
  { slot: "pilates-1", title: "Primera clase", text: "Te explicamos cómo funciona el Reformer antes de empezar." },
  { slot: "pilates-2", title: "Grupo reducido", text: "Pocas personas por clase para poder corregirte de cerca." },
  { slot: "pilates-3", title: "Progresión", text: "Ajustamos muelles, apoyos y ejercicios a medida que avanzas." },
];

const fisioServices: { title: string; text: string; slot?: MediaSlot }[] = [
  { slot: "fisio-manual", title: "Terapia manual", text: "El trabajo con las manos, en el centro del tratamiento." },
  { slot: "fisio-diatermia", title: "Diatermia", text: "Tecnología que podemos sumar al tratamiento." },
  { slot: "fisio-ondas", title: "Ondas de choque", text: "Otra herramienta disponible en la clínica." },
  { title: "Presoterapia", text: "Un recurso más para la recuperación." },
];

const Duo = () => {
  const pageRef = useRef<HTMLElement>(null);
  useReveal(pageRef, ".duo-reveal");

  return (
    <main ref={pageRef} className="duo-page">
      <header className="duo-nav">
        <Link to="/#proposal-duo" className="duo-wordmark" aria-label="Volver a las propuestas de Corpo">corpo</Link>
        <nav aria-label="Secciones">
          <a href="#pilates">Pilates</a>
          <a href="#fisioterapia">Fisioterapia</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="duo-button duo-button--small" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita</a>
      </header>

      <section className="duo-hero" aria-labelledby="duo-title">
        <h1 id="duo-title" className="duo-hero-title">
          Pilates <em>y</em> Fisioterapia<span> en Ronda Sur, Murcia</span>
        </h1>

        <div className="duo-split">
          <a className="duo-half duo-half--pilates" href="#pilates">
            <CorpoMedia slot="hero-pilates" fallback={pilatesPhoto} alt="" priority />
            <span className="duo-half-index">01</span>
            <span className="duo-half-copy">
              <strong>Pilates Máquina</strong>
              <span>Clases en Reformer, en grupos reducidos.</span>
            </span>
            <span className="duo-half-more">Ver Pilates ↓</span>
          </a>
          <a className="duo-half duo-half--fisio" href="#fisioterapia">
            <CorpoMedia slot="hero-fisio" fallback={fisioPhoto} alt="" priority />
            <span className="duo-half-index">02</span>
            <span className="duo-half-copy">
              <strong>Fisioterapia</strong>
              <span>Fisioterapia avanzada con ecógrafo en consulta.</span>
            </span>
            <span className="duo-half-more">Ver fisioterapia ↓</span>
          </a>

          <a className="duo-seal" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">
            <span>Pedir</span><span>cita</span><span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="duo-hero-strip">
          <span>Ecógrafo en la clínica</span>
          <span>Pilates en grupos reducidos</span>
          <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">¿Dudas? Escríbenos por WhatsApp ↗</a>
        </p>
      </section>

      <section id="pilates" data-scroll-align="start" className="duo-screen duo-pilates" aria-labelledby="duo-pilates-title">
        <div className="duo-pilates-intro duo-reveal">
          <p className="duo-kicker">01 · Pilates Máquina</p>
          <h2 id="duo-pilates-title">Fuerza, control y movilidad sobre el Reformer.</h2>
          <p className="duo-lead">
            Clases de Pilates Máquina en grupos reducidos: la máquina te sostiene y te da resistencia a la vez.
            Puedes empezar aunque nunca hayas hecho Pilates.
          </p>
          <a className="duo-button duo-button--light" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar clase ↗</a>
        </div>

        <figure className="duo-pilates-media duo-reveal">
          <CorpoMedia slot="pilates" fallback={reformerPhoto} alt="Sala de Pilates Máquina con Reformer" />
        </figure>

        <ol className="duo-steps duo-reveal">
          {pilatesSteps.map((step, index) => (
            <li key={step.title}>
              <CorpoMedia slot={step.slot} alt="" className="duo-step-photo" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section id="fisioterapia" data-scroll-align="start" className="duo-screen duo-fisio" aria-labelledby="duo-fisio-title">
        <div className="duo-fisio-intro duo-reveal">
          <p className="duo-kicker">02 · Fisioterapia</p>
          <h2 id="duo-fisio-title">Fisioterapia, con ecografía en consulta.</h2>
          <p className="duo-lead">
            Fisioterapia avanzada para dolor, lesiones y recuperación. Valoramos, te explicamos lo que vemos y combinamos
            las manos con la tecnología que necesita cada caso.
          </p>
          <a className="duo-button" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita de fisioterapia ↗</a>
        </div>

        <figure className="duo-fisio-media duo-reveal">
          <CorpoMedia slot="fisio" fallback={fisioPhoto} alt="Fisioterapeutas de Corpo tratando a pacientes en la clínica" />
        </figure>

        <ul className="duo-services duo-reveal">
          <li className="duo-eco">
            <CorpoMedia slot="ecografia" alt="" className="duo-service-photo" />
            <div>
              <span className="duo-eco-badge">Lo que nos diferencia</span>
              <h3>Ecografía</h3>
              <p>Tenemos ecógrafo en la clínica: vemos músculos, tendones y ligamentos en tiempo real durante la valoración.</p>
            </div>
          </li>
          {fisioServices.map((service) => (
            <li key={service.title}>
              {service.slot && <CorpoMedia slot={service.slot} alt="" className="duo-service-photo" />}
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="contacto" data-scroll-align="start" className="duo-screen duo-contact" aria-labelledby="duo-contact-title">
        <CorpoMap variant="duo" className="duo-map" />
        <div className="duo-contact-card duo-reveal">
          <p className="duo-kicker">03 · Contacto</p>
          <h2 id="duo-contact-title">Ven a vernos.</h2>
          <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          <dl>
            <div><dt>Teléfono y WhatsApp</dt><dd><a href={corpo.phoneUrl}>{corpo.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={corpo.emailUrl}>{corpo.email}</a></dd></div>
          </dl>
          <div className="duo-contact-actions">
            <a className="duo-button" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita ↗</a>
            <a className="duo-button duo-button--ghost" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="duo-button duo-button--ghost" href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </div>
      </section>

      <footer className="duo-footer">
        <Link to="/#proposal-duo" className="duo-wordmark" aria-label="Volver a las propuestas de Corpo">corpo</Link>
        <span>Fisioterapia y Pilates Máquina · Murcia</span>
        <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">@clinicacorpomurcia ↗</a>
      </footer>
    </main>
  );
};

export default Duo;
