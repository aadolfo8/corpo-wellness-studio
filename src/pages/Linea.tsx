import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import recovery from "@/assets/service-recovery.jpg";
import { corpo } from "@/lib/corpo";
import "./linea.css";

const startingPoints = [
  {
    label: "Fisioterapia",
    title: "Conocer fisioterapia",
    text: "Atención de fisioterapia, distinta de la práctica de Pilates Máquina.",
    image: recovery,
    tone: "linea-card--rose",
  },
  {
    label: "Pilates Máquina",
    title: "Explorar Pilates Máquina",
    text: "Práctica con máquina en formato individual o en grupos reducidos.",
    image: heroReformer,
    tone: "linea-card--blue",
  },
  {
    label: "Otros recursos",
    title: "Preguntar por opciones",
    text: "Diatermia, ondas de choque y presoterapia: recursos que puedes preguntar por separado.",
    image: aboutStudio,
    tone: "linea-card--green",
  },
];

const Linea = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    page.querySelectorAll<HTMLElement>(".linea-reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={pageRef} className="linea-page">
      <header className="linea-nav">
        <Link to="/#proposal-linea" className="linea-wordmark" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
        <nav aria-label="Navegación de Línea">
          <a href="#empezar">Empezar</a>
          <a href="#metodo">Método</a>
          <a href="#visita">Visita</a>
        </nav>
        <a className="linea-booking" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
      </header>

      <section className="linea-hero" aria-labelledby="linea-title">
        <div className="linea-hero-copy linea-reveal">
          <p className="linea-meta">Fisioterapia · Pilates Máquina · Murcia</p>
          <h1 id="linea-title">Cuidar el cuerpo<br />empieza por escucharlo.</h1>
          <p>Fisioterapia avanzada y Pilates Máquina en Ronda Sur. Información clara para preguntar antes de reservar.</p>
          <a className="linea-primary-action" href="#empezar">Conocer los servicios <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="linea-hero-photo linea-reveal">
          <img src={heroReformer} alt="Máquina Reformer junto a la ventana del estudio Corpo" fetchPriority="high" />
          <figcaption>Corpo · Ronda Sur</figcaption>
        </figure>
        <div className="linea-hero-note linea-reveal">
          <span>01</span>
          <p>Puedes preguntar por la oferta actual sin elegir un tratamiento.</p>
        </div>
      </section>

      <section id="empezar" className="linea-starts" aria-labelledby="starts-title">
        <div className="linea-section-heading linea-reveal">
          <p className="linea-meta">Una entrada posible</p>
          <h2 id="starts-title">No hay una sola<br />forma de empezar.</h2>
        </div>
        <div className="linea-start-grid">
          {startingPoints.map((point) => (
            <article className={`linea-start-card linea-reveal ${point.tone}`} key={point.label}>
              <div className="linea-card-copy">
                <span>{point.label}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
              <img src={point.image} alt="" loading="lazy" decoding="async" />
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="linea-method" aria-labelledby="method-title">
        <div className="linea-method-intro linea-reveal">
          <p className="linea-meta">Cómo leer la oferta</p>
          <h2 id="method-title">Menos dudas.<br />Más claridad.</h2>
        </div>
        <div className="linea-method-list">
          <article className="linea-reveal"><span>01</span><div><h3>Servicio</h3><p>Fisioterapia avanzada o Pilates Máquina: no son la misma oferta.</p></div></article>
          <article className="linea-reveal"><span>02</span><div><h3>Modalidad</h3><p>Individual y grupo reducido describen opciones de Pilates Máquina.</p></div></article>
          <article className="linea-reveal"><span>03</span><div><h3>Recurso</h3><p>Las tecnologías citadas no indican por sí solas qué atención necesitas.</p></div></article>
        </div>
      </section>

      <section id="visita" className="linea-visit linea-reveal" aria-labelledby="visit-title">
        <div>
          <p className="linea-meta">Ven a conocernos</p>
          <h2 id="visit-title">Un sitio para<br />empezar con calma.</h2>
        </div>
        <div className="linea-visit-details">
          <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          <p>Escribe para preguntar por una modalidad o recurso, o utiliza el enlace de reserva online de Corpo.</p>
          <div className="linea-visit-actions">
            <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
            <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
            <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="linea-footer">
        <Link to="/#proposal-linea" className="linea-wordmark" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
        <span>Fisioterapia y Pilates Máquina</span>
        <a href={corpo.phoneUrl}>{corpo.phone}</a>
        <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
};

export default Linea;
