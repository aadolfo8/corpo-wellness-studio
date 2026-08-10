import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";
import recovery from "@/assets/service-recovery.jpg";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { corpo } from "@/lib/corpo";
import "./trama.css";

const startingPoints = [
  {
    number: "01",
    title: "Dolor que no cede",
    text: "Fisioterapia avanzada para observar qué está ocurriendo y proponer un camino adaptado.",
    image: recovery,
  },
  {
    number: "02",
    title: "Quiero volver a moverme",
    text: "Pilates Máquina para entrenar fuerza, control y confianza de forma progresiva.",
    image: heroReformer,
  },
  {
    number: "03",
    title: "Necesito recuperar ritmo",
    text: "Un acompañamiento que puede combinar terapia manual, tecnología y movimiento guiado.",
    image: aboutStudio,
  },
];

const Trama = () => (
  <main className="trama-page">
    <header className="trama-nav">
      <Link to="/#proposal-trama" className="trama-wordmark" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
      <span className="trama-nav-copy">Fisioterapia y Pilates Máquina</span>
      <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
    </header>

    <section className="trama-hero" aria-labelledby="trama-title">
      <div className="trama-hero-copy">
        <p className="trama-label">Ronda Sur, Murcia</p>
        <h1 id="trama-title">Volver a ti<br />empieza por<br /><i>un gesto.</i></h1>
        <p className="trama-intro">Un lugar para entender tu cuerpo y recuperar el movimiento con atención cercana.</p>
        <a className="trama-action" href="#puntos-de-partida">Ver recorridos <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="trama-hero-image">
        <img src={heroReformer} alt="Máquina Reformer preparada en el estudio Corpo" fetchPriority="high" />
        <figcaption>Movimiento con intención</figcaption>
      </figure>
      <p className="trama-hero-index" aria-hidden="true">01 / 04</p>
    </section>

    <section id="puntos-de-partida" className="trama-starts" aria-labelledby="starts-title">
      <div className="trama-section-intro">
        <p className="trama-label">Punto de partida</p>
        <h2 id="starts-title">No hace falta<br />saberlo todo.</h2>
        <p>Solo hace falta empezar por algo que reconoces. El resto se conversa y se construye paso a paso.</p>
      </div>
      <div className="trama-start-grid">
        {startingPoints.map((point) => (
          <article className="trama-start-card" key={point.number}>
            <img src={point.image} alt="" loading="lazy" decoding="async" />
            <div className="trama-card-overlay" />
            <div className="trama-card-content">
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="trama-method" aria-labelledby="method-title">
      <div className="trama-method-image">
        <img src={aboutStudio} alt="Espacio de trabajo luminoso de Corpo" loading="lazy" decoding="async" />
      </div>
      <div className="trama-method-copy">
        <p className="trama-label">Una forma de trabajar</p>
        <h2 id="method-title">Escuchar.<br />Probar. Ajustar.</h2>
        <p>La atención personalizada es una conversación entre lo que sientes, lo que observamos y lo que tu cuerpo necesita hoy.</p>
        <dl className="trama-method-list">
          <div><dt>Atención</dt><dd>Tu proceso marca el ritmo.</dd></div>
          <div><dt>Movimiento</dt><dd>Con una progresión posible.</dd></div>
          <div><dt>Continuidad</dt><dd>Para llevarlo contigo fuera del estudio.</dd></div>
        </dl>
      </div>
    </section>

    <section className="trama-visit" aria-labelledby="visit-title">
      <div className="trama-visit-copy">
        <p className="trama-label">Cuando quieras</p>
        <h2 id="visit-title">Aquí empieza<br />tu siguiente paso.</h2>
        <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
        <div className="trama-contact-actions">
          <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
          <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <CorpoMap variant="wellness" className="trama-map" />
    </section>

    <footer className="trama-footer">
      <Link to="/#proposal-trama" className="trama-wordmark" aria-label="Volver a las propuestas de Corpo">CORPO</Link>
      <a href={corpo.phoneUrl}>{corpo.phone}</a>
      <a href={corpo.emailUrl}>{corpo.email}</a>
      <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
    </footer>
  </main>
);

export default Trama;
