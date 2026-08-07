import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import servicePilates from "@/assets/service-pilates.jpg";
import { corpo } from "@/lib/corpo";
import "./reformer.css";

const apparatusParts = [
  { title: "Muelles", text: "Ajustan la resistencia del aparato para adaptar el trabajo.", number: "01", marker: "springs" },
  { title: "Carro móvil", text: "La superficie móvil forma parte del trabajo de fuerza, movilidad y control.", number: "02", marker: "carriage" },
  { title: "Apoyos regulables", text: "Ayudan a organizar la posición sobre el aparato.", number: "03", marker: "supports" },
];

const practicePoints = [
  ["Servicio", "Pilates Máquina en Ronda Sur."],
  ["Atención", "Personalizada para cada persona."],
  ["Progresión", "Adaptada a cada persona."],
  ["Contacto", "Reserva online, WhatsApp o teléfono."],
];

const Reformer = () => {
  const [partIndex, setPartIndex] = useState(0);
  const activePart = apparatusParts[partIndex];

  const selectPart = (index: number) => {
    setPartIndex(index);
    document.getElementById(`reformer-part-${index}`)?.focus();
  };

  const handlePartKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? apparatusParts.length - 1 : (partIndex + (event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1) + apparatusParts.length) % apparatusParts.length;
    selectPart(next);
  };

  return (
    <main className="reformer-page">
      <header className="reformer-header">
        <Link to="/#proposal-reformer" className="reformer-logo" aria-label="Volver a la propuesta Reformer">CORPO<span>+</span></Link>
        <p>Pilates Máquina / Ronda Sur</p>
        <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar <span aria-hidden="true">↗</span></a>
      </header>

      <section className="reformer-opening" aria-labelledby="reformer-title">
        <div className="reformer-opening-copy"><p className="reformer-code">Pilates Máquina / 01</p><h1 id="reformer-title">Pilates<br /><em>Máquina</em><br />en Corpo.</h1><p>Pilates Máquina con atención personalizada y una progresión adaptada a cada persona.</p><a className="reformer-start" href="#aparato">Conocer el aparato <span aria-hidden="true">↓</span></a></div>
        <figure className="reformer-opening-image"><img src={servicePilates} alt="Persona sentada en un aparato Reformer" width="1280" height="1600" /><figcaption>Una máquina.<br />Distintas formas de movimiento.</figcaption></figure>
      </section>

      <section id="aparato" className="reformer-apparatus" aria-labelledby="apparatus-title">
        <div className="reformer-apparatus-heading"><p className="reformer-code">Pilates Máquina / 02</p><h2 id="apparatus-title">El Reformer<br /><em>se adapta.</em></h2><p>Conocer sus partes ayuda a entender cómo se organiza el aparato.</p></div>
        <div className="reformer-apparatus-board">
          <div className="reformer-machine"><img src={heroReformer} alt="Aparato Reformer en una sala luminosa" loading="lazy" decoding="async" width="1080" height="1920" /><span className={`reformer-machine-marker reformer-marker-${activePart.marker}`} aria-hidden="true">{activePart.number}</span><span className="reformer-machine-label">REFORMER / CORPO</span></div>
          <div className="reformer-part-tabs" role="tablist" aria-orientation="vertical" aria-label="Partes del Reformer">
            {apparatusParts.map((part, index) => <button key={part.title} id={`reformer-part-${index}`} type="button" role="tab" aria-selected={partIndex === index} aria-controls="reformer-part-panel" tabIndex={partIndex === index ? 0 : -1} onClick={() => selectPart(index)} onKeyDown={handlePartKeyDown}><span>{part.number}</span>{part.title}<b aria-hidden="true">+</b></button>)}
          </div>
          <div id="reformer-part-panel" className="reformer-part-panel" role="tabpanel" aria-labelledby={`reformer-part-${partIndex}`}><p className="reformer-code">Parte activa / {activePart.number}</p><h3>{activePart.title}</h3><p>{activePart.text}</p></div>
        </div>
      </section>

      <section className="reformer-session" aria-labelledby="session-title">
        <div className="reformer-session-heading"><p className="reformer-code">Pilates Máquina / 03</p><h2 id="session-title">Una práctica<br /><em>personalizada.</em></h2></div>
        <ul className="reformer-session-track">
          {practicePoints.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ul>
      </section>

      <section className="reformer-first-time" aria-labelledby="first-time-title"><div><p className="reformer-code">Pilates Máquina / 04</p><h2 id="first-time-title">Antes de<br /><em>reservar.</em></h2></div><div className="reformer-first-copy"><p>Si tienes dolor, una lesión reciente o dudas sobre qué puedes hacer, escríbenos para contarnos qué buscas.</p><dl><div><dt>Servicio</dt><dd>Pilates Máquina</dd></div><div><dt>Atención</dt><dd>Personalizada</dd></div><div><dt>Contacto</dt><dd>WhatsApp o teléfono</dd></div></dl></div></section>

      <section id="reserva" className="reformer-booking" aria-labelledby="booking-title"><div className="reformer-booking-card"><p className="reformer-code">Pilates Máquina / 05</p><h2 id="booking-title">El siguiente<br /><em>paso.</em></h2><p>Reserva online con Corpo o escríbenos para contarnos qué buscas.</p><div className="reformer-booking-links"><a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a><a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp sobre Pilates Máquina (nueva pestaña)">WhatsApp <span aria-hidden="true">↗</span></a></div></div><div className="reformer-booking-details"><address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address><a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a Corpo en Google Maps (nueva pestaña)">Cómo llegar <span aria-hidden="true">↗</span></a><a href={corpo.phoneUrl}>{corpo.phone}</a></div></section>

      <footer className="reformer-footer"><Link to="/#proposal-reformer" className="reformer-logo" aria-label="Volver a la propuesta Reformer">CORPO<span>+</span></Link><span>Fisioterapia · Pilates Máquina · Murcia</span><a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </main>
  );
};

export default Reformer;
