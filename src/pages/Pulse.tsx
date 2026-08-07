import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";
import { corpo } from "@/lib/corpo";
import "./pulse.css";

const needs = [
  {
    id: "entender",
    label: "Quiero consultar fisioterapia",
    title: "Fisioterapia avanzada",
    text: "Fisioterapia avanzada con atención personalizada.",
    service: "Fisioterapia avanzada",
    image: fisio,
    imageAlt: "Manos durante un trabajo corporal",
  },
  {
    id: "mover",
    label: "Me interesa el movimiento guiado",
    title: "Pilates Máquina",
    text: "Pilates Máquina con una progresión adaptada a cada persona.",
    service: "Pilates Máquina",
    image: pilates,
    imageAlt: "Persona utilizando una máquina de Pilates",
  },
  {
    id: "cuidar",
    label: "Quiero consultar recuperación",
    title: "Recuperación",
    text: "Recuperación con atención personalizada.",
    service: "Recuperación",
    image: recovery,
    imageAlt: "Toalla y recipientes sobre una superficie iluminada",
  },
];

const faqs = [
  ["¿Esta guía recomienda un tratamiento?", "No. Solo organiza servicios confirmados y te lleva a un canal de contacto."],
  ["¿Qué servicios ofrece Corpo?", "Fisioterapia avanzada, Pilates Máquina, terapia manual, ondas de choque, diatermia, presoterapia y recuperación."],
  ["¿Dónde está Corpo?", `En ${corpo.address}.`],
];

const getContextualWhatsappUrl = (selection: string) => {
  const url = new URL(corpo.whatsappUrl);
  url.searchParams.set("text", `Hola Corpo, me gustaría orientarme sobre: ${selection}.`);
  return url.toString();
};

const Pulse = () => {
  const [selectedNeed, setSelectedNeed] = useState(needs[0]);

  const selectNeed = (index: number) => {
    setSelectedNeed(needs[index]);
    document.getElementById(`pulse-need-${needs[index].id}`)?.focus();
  };

  const handleNeedKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? needs.length - 1
        : (index + (event.key === "ArrowDown" ? 1 : -1) + needs.length) % needs.length;
    selectNeed(nextIndex);
  };

  return (
    <main className="pulse-page">
      <header className="pulse-header">
        <Link to="/#proposal-pulse" className="pulse-logo" aria-label="Volver a la propuesta Pulse">CORPO<span>+</span></Link>
        <p className="pulse-status"><span aria-hidden="true" /> Clínica de fisioterapia en Murcia</p>
        <a href={corpo.whatsappUrl} target="_blank" rel="noreferrer" className="pulse-header-action" aria-label="Hablar por WhatsApp (nueva pestaña)">Hablar ahora <span aria-hidden="true">↗</span></a>
      </header>

      <section className="pulse-cover" aria-labelledby="pulse-title">
        <div className="pulse-cover-image">
          <img src={heroReformer} alt="Máquina de Pilates en una sala luminosa" />
          <span>Corpo / Movimiento</span>
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
          <p>Esta guía no hace una recomendación clínica. Solo te ayuda a localizar un servicio confirmado y abrir el canal que prefieras.</p>
        </div>
        <div className="pulse-need-list" role="tablist" aria-label="Orientación de servicios" aria-orientation="vertical">
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
        <article id="pulse-need-answer" className="pulse-answer" role="tabpanel" aria-labelledby={`pulse-need-${selectedNeed.id}`} aria-live="polite" aria-atomic="true">
          <img src={selectedNeed.image} alt={selectedNeed.imageAlt} loading="lazy" />
          <div>
            <p className="pulse-label">Orientación, no recomendación clínica</p>
            <p className="pulse-answer-context">Has elegido: {selectedNeed.label}</p>
            <h3>{selectedNeed.title}</h3>
            <p>{selectedNeed.text}</p>
            <span className="pulse-answer-service">{selectedNeed.service}</span>
            <div className="pulse-answer-actions">
              <a href={getContextualWhatsappUrl(selectedNeed.label)} target="_blank" rel="noreferrer" aria-label={`Consultar por WhatsApp sobre ${selectedNeed.label} (nueva pestaña)`}>Contarlo por WhatsApp <span aria-hidden="true">↗</span></a>
              <a href={corpo.bookingUrl} target="_blank" rel="noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
      </section>

      <section className="pulse-route" aria-labelledby="route-title">
        <div className="pulse-route-title">
          <p className="pulse-label">Una ruta clara</p>
          <h2 id="route-title">De la duda<br /><em>a un canal</em><br />directo.</h2>
        </div>
        <ol className="pulse-route-line" aria-label="Formas de continuar con Corpo">
          <li><span>01</span><h3>Orientarte</h3><p>Consulta los servicios confirmados de Corpo.</p></li>
          <li><span>02</span><h3>Contactar</h3><p>Escribe por WhatsApp o email, o llama por teléfono.</p></li>
          <li><span>03</span><h3>Reservar</h3><p>Elige una cita desde la reserva online.</p></li>
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
          <a href={corpo.bookingUrl} target="_blank" rel="noreferrer" aria-label="Reservar online (nueva pestaña)"><span>01</span><strong>Reservar online</strong><b aria-hidden="true">↗</b></a>
          <a href={corpo.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)"><span>02</span><strong>Escribir por WhatsApp</strong><b aria-hidden="true">↗</b></a>
          <a href={corpo.phoneUrl}><span>03</span><strong>Llamar al {corpo.phone}</strong><b aria-hidden="true">↗</b></a>
          <a href={corpo.emailUrl}><span>04</span><strong>Enviar un email</strong><b aria-hidden="true">↗</b></a>
          <a href={corpo.directionsUrl} target="_blank" rel="noreferrer" aria-label="Abrir indicaciones para llegar (nueva pestaña)"><span>05</span><strong>Cómo llegar</strong><b aria-hidden="true">↗</b></a>
        </div>
      </section>

      <footer className="pulse-footer">
        <Link to="/#proposal-pulse" className="pulse-logo" aria-label="Volver a la propuesta Pulse">CORPO<span>+</span></Link>
        <a href={corpo.mapsUrl} target="_blank" rel="noreferrer" aria-label="Ver la ubicación de Corpo (nueva pestaña)">{corpo.addressLines[0]} · Murcia</a>
        <a href={corpo.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
};

export default Pulse;
