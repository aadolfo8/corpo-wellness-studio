import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import recovery from "@/assets/service-recovery.jpg";
import fisio from "@/assets/service-fisio.jpg";
import "./motion.css";

const services = [
  ["01", "Fisioterapia", "Evaluamos, intervenimos y trazamos una vuelta al movimiento con sentido."],
  ["02", "Pilates Reformer", "Fuerza, control y movilidad con atención real en grupos reducidos."],
  ["03", "Readaptación", "Del tratamiento al gesto que necesitas para volver a vivir o competir."],
];

const Motion = () => (
  <main className="motion-page">
    <header className="motion-nav">
      <Link to="/" className="motion-mark" aria-label="Volver a propuestas">CORPO<span>+</span></Link>
      <nav aria-label="Principal">
        <a href="#programas">Programas</a>
        <a href="#metodo">Método</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a className="motion-nav-cta" href="#contacto">Reserva una sesión <span>↗</span></a>
    </header>

    <section className="motion-hero">
      <img src={heroReformer} alt="Entrenamiento de Pilates reformer" />
      <div className="motion-hero-overlay" />
      <div className="motion-hero-copy">
        <p className="motion-kicker">Fisioterapia + entrenamiento / Murcia</p>
        <h1>EL CUERPO<br />NO PARA.</h1>
        <p className="motion-intro">Recupera fuerza, gana confianza y vuelve a hacer lo que te mueve.</p>
        <a href="#programas" className="motion-circle-link">Explorar<br />programas <span>↓</span></a>
      </div>
      <p className="motion-side-label">Corpo / Movimiento con criterio</p>
    </section>

    <section id="programas" className="motion-programs">
      <div className="motion-section-heading">
        <p className="motion-kicker">01 / Lo que hacemos</p>
        <h2>No buscamos<br /><em>atajos.</em></h2>
      </div>
      <div className="motion-program-list">
        {services.map(([number, title, text]) => (
          <article key={number} className="motion-program">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="motion-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>

    <section id="metodo" className="motion-method">
      <div className="motion-method-image"><img src={fisio} alt="Sesión de fisioterapia" /></div>
      <div className="motion-method-copy">
        <p className="motion-kicker">02 / Nuestro método</p>
        <h2>ENTENDER<br />ANTES DE<br /><em>EXIGIR.</em></h2>
        <p>No repetimos protocolos. Escuchamos, valoramos y construimos un plan que responde a tu momento, tu cuerpo y tu objetivo.</p>
        <div className="motion-steps"><span>Valorar</span><span>Tratar</span><span>Progresar</span></div>
      </div>
    </section>

    <section className="motion-statement">
      <img src={recovery} alt="Ejercicio de recuperación" />
      <div><p className="motion-kicker">Corpo en movimiento</p><h2>Tu siguiente<br /><em>repetición.</em></h2></div>
    </section>

    <section id="contacto" className="motion-contact">
      <p className="motion-kicker">03 / Empieza aquí</p>
      <h2>¿EN QUÉ<br /><em>TE MOVEMOS?</em></h2>
      <a href="https://appclinicacorpo.viday.es/" target="_blank" rel="noreferrer">Pedir cita <span>↗</span></a>
      <p className="motion-contact-details">C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />Murcia · 624 06 03 40</p>
    </section>
  </main>
);

export default Motion;
