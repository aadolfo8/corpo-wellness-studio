import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import heroReformer from "@/assets/hero-reformer.jpg";
import servicePilates from "@/assets/service-pilates.jpg";
import "./reformer.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita%20de%20Pilates%20M%C3%A1quina.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const apparatusParts = [
  ["Muelles", "Permiten ajustar la resistencia para que el trabajo acompañe tu nivel y tu objetivo.", "01"],
  ["Carro móvil", "Una superficie que se desplaza y te obliga a organizar el movimiento con control.", "02"],
  ["Apoyos regulables", "El aparato se adapta a tu posición para trabajar con más precisión y atención.", "03"],
];

const sessionSteps = [
  ["Preparar", "Ajustar el aparato y encontrar una posición estable."],
  ["Respirar", "Usar la respiración para organizar el movimiento."],
  ["Controlar", "Moverte con atención, sin ir más rápido de lo necesario."],
  ["Progresar", "Aumentar el reto cuando tu cuerpo está preparado."],
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
        <Link to="/" className="reformer-logo" aria-label="Volver a propuestas">CORPO<span>+</span></Link>
        <p>Pilates Máquina / Ronda Sur</p>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar Pilates Máquina (nueva pestaña)">Reservar <span aria-hidden="true">↗</span></a>
      </header>

      <section className="reformer-opening" aria-labelledby="reformer-title">
        <div className="reformer-opening-copy"><p className="reformer-code">Pilates Máquina / 01</p><h1 id="reformer-title">Aprende a<br /><em>moverte</em><br />con precisión.</h1><p>Sesiones en Reformer guiadas por fisioterapeutas para trabajar fuerza, movilidad, postura y control.</p><a className="reformer-start" href="#aparato">Conocer el aparato <span aria-hidden="true">↓</span></a></div>
        <figure className="reformer-opening-image"><img src={heroReformer} alt="Sala de Pilates Reformer en Corpo" /><figcaption>Una máquina.<br />Muchas formas de trabajar.</figcaption></figure>
      </section>

      <section id="aparato" className="reformer-apparatus" aria-labelledby="apparatus-title">
        <div className="reformer-apparatus-heading"><p className="reformer-code">Pilates Máquina / 02</p><h2 id="apparatus-title">El Reformer<br /><em>se adapta.</em></h2><p>No tienes que saber usarlo antes de llegar. Conocer sus partes ayuda a entender cómo se construye una sesión.</p></div>
        <div className="reformer-apparatus-board">
          <div className="reformer-machine"><img src={servicePilates} alt="Persona trabajando en un aparato Reformer" /><div className="reformer-machine-line reformer-line-one" aria-hidden="true" /><div className="reformer-machine-line reformer-line-two" aria-hidden="true" /><div className="reformer-machine-line reformer-line-three" aria-hidden="true" /><span className="reformer-machine-label">REFORMER / CORPO</span></div>
          <div className="reformer-part-tabs" role="tablist" aria-label="Partes del Reformer">
            {apparatusParts.map(([title, , number], index) => <button key={title} id={`reformer-part-${index}`} type="button" role="tab" aria-selected={partIndex === index} aria-controls="reformer-part-panel" tabIndex={partIndex === index ? 0 : -1} onClick={() => selectPart(index)} onKeyDown={handlePartKeyDown}><span>{number}</span>{title}<b aria-hidden="true">+</b></button>)}
          </div>
          <div id="reformer-part-panel" className="reformer-part-panel" role="tabpanel" aria-labelledby={`reformer-part-${partIndex}`}><p className="reformer-code">Parte activa / {activePart[2]}</p><h3>{activePart[0]}</h3><p>{activePart[1]}</p></div>
        </div>
      </section>

      <section className="reformer-session" aria-labelledby="session-title">
        <div className="reformer-session-heading"><p className="reformer-code">Pilates Máquina / 03</p><h2 id="session-title">Una sesión<br /><em>se construye.</em></h2></div>
        <ol className="reformer-session-track">
          {sessionSteps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="reformer-first-time" aria-labelledby="first-time-title"><div><p className="reformer-code">Pilates Máquina / 04</p><h2 id="first-time-title">¿Es tu<br /><em>primera vez?</em></h2></div><div className="reformer-first-copy"><p>No necesitas experiencia previa. Si tienes dolor, una lesión reciente o dudas sobre qué puedes hacer, lo más prudente es pedir orientación primero.</p><dl><div><dt>Experiencia</dt><dd>No necesaria</dd></div><div><dt>Guía</dt><dd>Fisioterapeutas</dd></div><div><dt>Formato</dt><dd>Reformer</dd></div></dl></div></section>

      <section id="reserva" className="reformer-booking" aria-labelledby="booking-title"><div className="reformer-booking-card"><p className="reformer-code">Pilates Máquina / 05</p><h2 id="booking-title">Tu primer<br /><em>movimiento.</em></h2><p>Reserva una sesión en Corpo o escríbenos para contarnos qué buscas.</p><div className="reformer-booking-links"><a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar Pilates Máquina online (nueva pestaña)">Reservar online <span aria-hidden="true">↗</span></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp sobre Pilates Máquina (nueva pestaña)">WhatsApp <span aria-hidden="true">↗</span></a></div></div><div className="reformer-booking-details"><address>C. Pedáneo José Sánchez Mompeán, 16, Bajo<br />30010 San Benito - Patiño, Murcia</address><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps (nueva pestaña)">Cómo llegar <span aria-hidden="true">↗</span></a><a href="tel:+34624060340">624 06 03 40</a></div></section>

      <footer className="reformer-footer"><Link to="/" className="reformer-logo">CORPO<span>+</span></Link><span>Fisioterapia · Pilates Máquina · Murcia</span><a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </main>
  );
};

export default Reformer;
