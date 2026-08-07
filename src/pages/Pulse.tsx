import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import "./pulse.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const needs = [
  {
    id: "entender",
    label: "Entender algo que me pasa",
    title: "Empieza por una valoración",
    text: "Hablamos de lo que ocurre, revisamos tu movilidad y elegimos el tratamiento que tiene sentido para tu momento.",
    service: "Fisioterapia avanzada",
    image: fisio,
  },
  {
    id: "mover",
    label: "Volver a moverme mejor",
    title: "Construye una práctica",
    text: "Pilates Máquina te permite trabajar fuerza, control y movilidad con una guía profesional y progresiva.",
    service: "Pilates Máquina",
    image: pilates,
  },
  {
    id: "cuidar",
    label: "Cuidarme antes de parar",
    title: "Haz espacio para tu cuerpo",
    text: "Un acompañamiento personalizado para mantenerte activo, recuperar confianza y cuidar tus hábitos de movimiento.",
    service: "Recuperación",
    image: recovery,
  },
];

const faqs = [
  ["¿Necesito experiencia previa?", "No. Si es tu primera vez, empezamos por la técnica, la respiración y ejercicios sencillos."],
  ["¿Y si tengo dolor?", "Lo más prudente es pedir orientación antes de empezar. Desde ahí decidimos si conviene fisioterapia, ejercicio guiado o Pilates Máquina adaptado."],
  ["¿Dónde está Corpo?", "En C. Pedáneo José Sánchez Mompeán, 16, Bajo, 30010 San Benito - Patiño, Murcia."],
];

const Pulse = () => {
  const [selectedNeed, setSelectedNeed] = useState(needs[0]);

  const selectNeed = (index: number) => {
    setSelectedNeed(needs[index]);
    document.getElementById(`pulse-need-${needs[index].id}`)?.focus();
  };

  const handleNeedKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? needs.length - 1
        : (index + (event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1) + needs.length) % needs.length;
    selectNeed(nextIndex);
  };

  return (
    <main className="pulse-page">
      <header className="pulse-header">
        <Link to="/" className="pulse-logo" aria-label="Volver a propuestas">CORPO<span>+</span></Link>
        <p className="pulse-status"><span aria-hidden="true" /> Clínica de fisioterapia en Murcia</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="pulse-header-action">Hablar ahora <span aria-hidden="true">↗</span></a>
      </header>

      <section className="pulse-cover" aria-labelledby="pulse-title">
        <div className="pulse-cover-image">
          <img src={heroReformer} alt="Sala de Pilates Reformer de Corpo" />
          <span>Corpo / Archivo</span>
        </div>
        <div className="pulse-cover-copy">
          <p className="pulse-label">CORPO / UNA CLÍNICA PARA MOVERTE MEJOR</p>
          <h1 id="pulse-title">No empieces<br />por el<br /><em>tratamiento.</em></h1>
          <p>Empieza por la pregunta. ¿Qué quieres volver a hacer?</p>
          <a className="pulse-button" href="#elige">Encontrar mi punto de partida <span>↓</span></a>
        </div>
      <div className="pulse-cover-stamp" aria-hidden="true">FISIO<br />+<br />MOVIMIENTO</div>
      </section>

      <section id="elige" className="pulse-selector" aria-labelledby="selector-title">
        <div className="pulse-selector-intro">
          <p className="pulse-label">Una pregunta rápida</p>
          <h2 id="selector-title">¿Qué te trae<br /><em>hoy?</em></h2>
          <p>No hace falta que sepas qué servicio necesitas. Elige lo que más se parece a tu momento y te orientamos.</p>
        </div>
        <div className="pulse-need-list" role="tablist" aria-label="Motivo de visita">
          {needs.map((need, index) => (
            <button
              key={need.id}
              type="button"
              role="tab"
              id={`pulse-need-${need.id}`}
              aria-controls="pulse-need-answer"
              aria-selected={selectedNeed.id === need.id}
              tabIndex={selectedNeed.id === need.id ? 0 : -1}
              className={selectedNeed.id === need.id ? "is-active" : ""}
              onClick={() => setSelectedNeed(need)}
              onKeyDown={(event) => handleNeedKeyDown(event, index)}
            >
              <span>0{index + 1}</span>{need.label}<b aria-hidden="true">+</b>
            </button>
          ))}
        </div>
        <article id="pulse-need-answer" className="pulse-answer" role="tabpanel" aria-labelledby={`pulse-need-${selectedNeed.id}`} aria-live="polite">
          <img src={selectedNeed.image} alt="" />
          <div>
            <p className="pulse-label">Tu posible punto de partida</p>
            <h3>{selectedNeed.title}</h3>
            <p>{selectedNeed.text}</p>
            <span className="pulse-answer-service">{selectedNeed.service}</span>
          </div>
        </article>
      </section>

      <section className="pulse-route" aria-labelledby="route-title">
        <div className="pulse-route-title">
          <p className="pulse-label">Una ruta clara</p>
          <h2 id="route-title">Del “no sé<br /><em>por dónde</em><br />empezar”.</h2>
        </div>
        <ol className="pulse-route-line" aria-label="Proceso de Corpo">
          <li><span>01</span><h3>Escuchar</h3><p>Qué ocurre, desde cuándo y qué quieres recuperar.</p></li>
          <li><span>02</span><h3>Valorar</h3><p>Movilidad, dolor, hábitos y objetivos reales.</p></li>
          <li><span>03</span><h3>Acompañar</h3><p>Un plan adaptado que puedas sostener.</p></li>
        </ol>
      </section>

      <section className="pulse-visit-guide" aria-labelledby="guide-title">
        <div className="pulse-guide-heading">
          <p className="pulse-label">Antes de venir</p>
          <h2 id="guide-title">Lo que<br /><em>quieres saber.</em></h2>
        </div>
        <div className="pulse-faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="visita" className="pulse-contact" aria-labelledby="contact-title">
        <div className="pulse-contact-copy">
          <p className="pulse-label">Elige cómo seguimos</p>
          <h2 id="contact-title">Habla con<br /><em>una persona.</em></h2>
          <p>Estamos en Ronda Sur. Puedes reservar directamente o escribirnos antes si prefieres contarnos tu caso.</p>
        </div>
        <div className="pulse-contact-options">
          <a href={bookingUrl} target="_blank" rel="noreferrer"><span>01</span><strong>Reservar online</strong><b aria-hidden="true">↗</b></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><span>02</span><strong>Escribir por WhatsApp</strong><b aria-hidden="true">↗</b></a>
          <a href="tel:+34624060340"><span>03</span><strong>Llamar al 624 06 03 40</strong><b aria-hidden="true">↗</b></a>
          <a href={mapsUrl} target="_blank" rel="noreferrer"><span>04</span><strong>Ver cómo llegar</strong><b aria-hidden="true">↗</b></a>
        </div>
      </section>

      <footer className="pulse-footer">
        <Link to="/" className="pulse-logo">CORPO<span>+</span></Link>
        <span>C. Pedáneo José Sánchez Mompeán, 16, Bajo · Murcia</span>
        <a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
};

export default Pulse;
